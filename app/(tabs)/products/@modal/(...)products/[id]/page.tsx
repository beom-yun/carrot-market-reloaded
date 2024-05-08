import ProductsBtn from "@/components/products-btn";
import db from "@/lib/db";
import { PhotoIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Modal({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  if (isNaN(id)) return notFound();
  const product = await db.product.findUnique({
    where: { id },
    select: { title: true, photo: true },
  });

  return (
    <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-60">
      <ProductsBtn />
      <div className="flex h-1/2 w-full max-w-screen-sm justify-center">
        <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-md bg-neutral-700 text-neutral-200">
          {product?.photo ? (
            <Image
              className="object-cover"
              fill
              src={`${product.photo}/public`}
              alt={product.title}
            />
          ) : (
            <PhotoIcon className="h-28" />
          )}
        </div>
      </div>
    </div>
  );
}
