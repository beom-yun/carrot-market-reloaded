"use server";

import bcrypt from "bcrypt";
import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  USERNAME_MAX_LENGTH,
  USERNAME_MIN_LENGTH,
} from "@/lib/constants";
import db from "@/lib/db";
import { z } from "zod";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const checkPasswords = ({
  password,
  confirmPassword,
}: {
  password: string;
  confirmPassword: string;
}) => password === confirmPassword;

const checkUniqueUsername = async (username: string) => {
  const user = await db.user.findUnique({
    where: { username },
    select: { id: true },
  });
  return !Boolean(user);
};

const checkUniqueEmail = async (email: string) => {
  const user = await db.user.findUnique({
    where: { email },
    select: { id: true },
  });
  return !Boolean(user);
};

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "아이디는 문자열이어야 합니다.",
        required_error: "아이디는 필수입니다.",
      })
      .min(USERNAME_MIN_LENGTH, "아이디가 너무 짧습니다.(최소 3자)")
      .max(USERNAME_MAX_LENGTH, "아이디가 너무 깁니다.(최대 16자)")
      .trim()
      .toLowerCase()
      .refine(checkUniqueUsername, "이미 사용중인 아이디입니다."),
    email: z
      .string()
      .email()
      .toLowerCase()
      .refine(checkUniqueEmail, "이미 사용중인 이메일입니다."),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH)
      .regex(
        PASSWORD_REGEX,
        "비밀번호는 대문자, 소문자, 숫자, 특수문자를 포함하여야 합니다.",
      ),
    confirmPassword: z.string().min(PASSWORD_MIN_LENGTH),
  })
  .refine(checkPasswords, {
    message: "패스워드가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };
  const result = await formSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const user = await db.user.create({
      data: {
        username: result.data.username,
        email: result.data.email,
        password: await bcrypt.hash(result.data.password, 12),
      },
      select: { id: true },
    });
    const cookie = await getIronSession(cookies(), {
      cookieName: "delicious-karrot",
      password: process.env.COOKIE_PASSWORD!,
    });
    //@ts-ignore
    cookie.id = user.id;
    await cookie.save();
    redirect("/profile");
  }
}
