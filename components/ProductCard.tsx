import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import React from "react";

const ProductCard = (data: any) => {
  const { id, attributes: p }: { id: number; attributes: any } = data.data;
  // const p = attributes;

  return (
    <Link
      href={`/product/${p?.slug}`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <Image
        src={p.thumbnail.data.attributes.url}
        width={500}
        height={500}
        alt={p.name}
      />

      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{p?.name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">&#8377;{p?.price}</p>
          {p?.original_price && (
            <>
              <p className="text-base font-medium line-through">
                &#8377;{p?.original_price}
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                {getDiscountedPricePercentage(p?.original_price, p?.price)} %
                off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
