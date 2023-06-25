import { Wrapper } from "@/components";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import { fetchDataFromApi } from "@/utils/api";
import Image from "next/image";
import { useEffect, useState } from "react";
import { InferGetStaticPropsType } from "next";

export default function Home({ products }: any) {
  // console.log(products?.data);

  return (
    <main>
      <HeroBanner />
      <Wrapper>
        {/* heading and paragraph start   */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running.
          </div>
        </div>
        {/* heading and paragraph end    */}
        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products?.data?.map((product: any) => (
            <ProductCard key={product?.id} data={product} />
          ))}
        </div>
        {/* products grid end */}
      </Wrapper>
    </main>
  );
}

type ProductData = {
  data: [object];
  meta: object;
};

export async function getStaticProps() {
  const products: ProductData[] = await fetchDataFromApi(
    "/api/products?populate=*"
  );
  return {
    props: { products },
  };
}
