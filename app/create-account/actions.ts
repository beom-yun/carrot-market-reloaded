"use server";

import { z } from "zod";

const usernameSchema = z.string().min(4).max(16);

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };
  usernameSchema.parse(data.username);
}
