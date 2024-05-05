"use client";

import { InitialProducts } from "@/app/(tabs)/products/page";
import ListProduct from "./list-product";
import { useState } from "react";
import { getMoreProducts } from "@/app/(tabs)/products/actions";

interface IProductListProps {
  initialProducts: InitialProducts;
}

export default function ProductList({ initialProducts }: IProductListProps) {
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);
  const onLoadMoreProducts = async () => {
    setIsLoading(true);
    const newProducts = await getMoreProducts(1);
    setProducts(prev => [...prev, ...newProducts]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col gap-5 p-5">
      {products.map(product => (
        <ListProduct key={product.id} {...product} />
      ))}
      <button
        onClick={onLoadMoreProducts}
        disabled={isLoading}
        className="mx-auto w-fit rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold transition hover:opacity-90 active:scale-95"
      >
        {isLoading ? "불러오는 중" : "더 불러오기"}
      </button>
    </div>
  );
}
