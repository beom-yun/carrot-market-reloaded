"use server";

import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX } from "@/lib/constants";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email().toLowerCase(),
  password: z
    .string()
    .min(PASSWORD_MIN_LENGTH)
    .regex(
      PASSWORD_REGEX,
      "비밀번호는 대문자, 소문자, 숫자, 특수문자를 포함하여야 합니다.",
    ),
});

export async function login(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
}
