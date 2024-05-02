"use server";

import { z } from "zod";

const passwordRegex = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).+$/,
);

const checkPasswords = ({
  password,
  confirmPassword,
}: {
  password: string;
  confirmPassword: string;
}) => password === confirmPassword;

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "아이디는 문자열이어야 합니다.",
        required_error: "아이디는 필수입니다.",
      })
      .min(3, "아이디가 너무 짧습니다.(최소 3자)")
      .max(16, "아이디가 너무 깁니다.(최대 16자)")
      .trim()
      .toLowerCase(),
    email: z.string().email().toLowerCase(),
    password: z
      .string()
      .min(4)
      .regex(
        passwordRegex,
        "비밀번호는 대문자, 소문자, 숫자, 특수문자를 포함하여야 합니다.",
      ),
    confirmPassword: z.string().min(4),
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
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
}
