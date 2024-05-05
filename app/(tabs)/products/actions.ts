"use server";

import { PAGE_SIZE } from "@/lib/constants";
import db from "@/lib/db";

export async function getMoreProducts(page: number) {
  const products = await db.product.findMany({
    select: {
      id: true,
      title: true,
      price: true,
      photo: true,
      created_at: true,
    },
    orderBy: {
      created_at: "desc",
    },
    take: PAGE_SIZE,
    skip: page * PAGE_SIZE,
  });
  return products;
}
