"use server";

import { z } from "zod";
import fs from "fs/promises";
import db from "@/lib/db";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

const productSchema = z.object({
  photo: z.string({
    required_error: "사진이 필수입니다.",
  }),
  title: z.string({
    required_error: "제목이 필수입니다.",
  }),
  price: z.coerce.number({
    required_error: "가격이 필수입니다.",
  }),
  description: z.string({
    required_error: "설명이 필수입니다.",
  }),
});

export async function uploadProduct(prevState: any, formData: FormData) {
  const data = {
    photo: formData.get("photo"),
    title: formData.get("title"),
    price: formData.get("price"),
    description: formData.get("description"),
  };
  const result = productSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const session = await getSession();
    if (session.id) {
      const newProduct = await db.product.create({
        data: {
          photo: result.data.photo,
          title: result.data.title,
          price: result.data.price,
          description: result.data.description,
          user: { connect: { id: session.id } },
        },
        select: { id: true },
      });
      redirect(`/products/${newProduct.id}`);
    }
  }
}

export async function getUploadUrl() {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/images/v2/direct_upload`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CLOUDFLARE_API_KEY}`,
        // "Content-Type": "multipart/form-data",
      },
    },
  );
  const data = await response.json();
  return data;
}
