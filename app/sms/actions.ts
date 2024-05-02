"use server";

import validator from "validator";
import { z } from "zod";

const phoneNumberSchema = z.string().trim().refine(validator.isMobilePhone);

const verificationCodeSchema = z.coerce.number().min(100000).max(999999);

export async function smsLogIn(prevState: any, formData: FormData) {}
