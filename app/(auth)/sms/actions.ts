"use server";

import { redirect } from "next/navigation";
import validator from "validator";
import { z } from "zod";

const phoneNumberSchema = z
  .string()
  .trim()
  .refine(
    phone => validator.isMobilePhone(phone, "ko-KR"),
    "잘못된 핸드폰 번호입니다.",
  );

const verificationCodeSchema = z.coerce.number().min(100000).max(999999);

export interface IActionState {
  code: boolean;
}

export async function smsLogIn(prevState: IActionState, formData: FormData) {
  const phoneNumber = formData.get("phoneNumber");
  const verificationCode = formData.get("verificationCode");

  if (!prevState.code) {
    const result = phoneNumberSchema.safeParse(phoneNumber);
    if (!result.success) {
      return { code: false, error: result.error.flatten() };
    } else {
      return { code: true };
    }
  } else {
    const result = verificationCodeSchema.safeParse(verificationCode);
    if (!result.success) {
      return { code: true, error: result.error.flatten() };
    } else {
      redirect("/");
    }
  }
}
