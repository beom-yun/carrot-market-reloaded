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
  if (data.photo instanceof File) {
    // 나중에 Cloudflare로 대체될 것
    const photoData = await data.photo.arrayBuffer();
    await fs.appendFile(`./public/${data.photo.name}`, Buffer.from(photoData));
    data.photo = `/${data.photo.name}`;
  }
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
