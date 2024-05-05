import ProductList from "@/components/product-list";
import { PAGE_SIZE } from "@/lib/constants";
import db from "@/lib/db";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Prisma } from "@prisma/client";
import Link from "next/link";

async function getInitialProducts() {
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
  });
  return products;
}

export type InitialProducts = Prisma.PromiseReturnType<
  typeof getInitialProducts
>;

export default async function Products() {
  const initialProducts = await getInitialProducts();

  return (
    <div>
      <ProductList initialProducts={initialProducts} />
      <Link
        href={"/products/add"}
        className="fixed bottom-24 right-6 flex size-12 items-center justify-center rounded-full bg-orange-500 text-white transition-colors hover:bg-orange-400"
      >
        <PlusIcon className="size-8" />
      </Link>
    </div>
  );
}
