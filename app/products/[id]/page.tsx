import db from "@/lib/db";
import getSession from "@/lib/session";
import { formatToWon } from "@/lib/utils";
import { UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

async function getIsOwner(userId: number) {
  const session = await getSession();
  if (session.id) {
    return session.id === userId;
  }
  return false;
}

async function getProduct(id: number) {
  const product = await db.product.findUnique({
    where: { id },
    include: { user: { select: { username: true, avatar: true } } },
  });
  return product;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await getProduct(Number(params.id));

  return {
    title: product?.title,
  };
}

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return notFound();
  }
  const product = await getProduct(id);
  if (!product) {
    return notFound();
  }
  const isOwner = await getIsOwner(product.userId);
  const deleteProduct = async () => {
    "use server";
    await db.product.delete({
      where: { id },
    });
    redirect("/products");
  };

  return (
    <div className="pb-40">
      <div className="relative aspect-square">
        <Image
          fill
          src={`${product.photo}/public`}
          alt={product.title}
          className="object-cover"
        />
      </div>
      <div className="flex items-center gap-3 border-b border-neutral-700 p-5">
        <div className="size-10 overflow-hidden rounded-full">
          {product.user.avatar ? (
            <Image
              src={product.user.avatar}
              alt={product.user.username}
              width={40}
              height={40}
            />
          ) : (
            <UserIcon />
          )}
        </div>
        <div>
          <h3>{product.user.username}</h3>
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <p>{product.description}</p>
      </div>
      <div className="fixed bottom-0 flex w-full max-w-screen-sm items-center justify-between bg-neutral-800 p-5 pb-10">
        <span className="text-xl font-semibold">
          {formatToWon(product.price)}원
        </span>
        {isOwner ? (
          <form action={deleteProduct}>
            <button className="rounded-md bg-red-500 px-5 py-2.5 font-semibold text-white">
              삭제하기
            </button>
          </form>
        ) : null}
        <Link
          className="rounded-md bg-orange-500 px-5 py-2.5 font-semibold text-white"
          href={""}
        >
          채팅하기
        </Link>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const products = await db.product.findMany({
    select: { id: true },
  });
  return products.map(product => ({ id: product.id + "" }));
}
