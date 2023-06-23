import { Wrapper } from "@/components";
import ProductDetailsCarousal from "@/components/ProductDetailsCarousal";
import RelatedProducts from "@/components/RelatedProducts";
import React from "react";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className=" flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start  */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[600px] lf:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousal />
          </div>
          {/* left column end  */}
          {/* right column start  */}
          <div className="flex-[1] py-3 ">
            {/* product title  */}
            <div className="text-[34px] font-semibold mb-2">
              Jordan Retro 6 G
            </div>
            {/* product subtitle  */}
            <div className="text-lg font-semibold mb-5">
              Men&apos;s Golf Shoes
            </div>
            {/* product price  */}
            <div className="text-lg font-semibold">MRP : ₹ 19 699.00</div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">{`(Also includes all applicable duties)`}</div>
            {/* product size range start  */}
            <div className="mb-10">
              {/* heading start  */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* heading end */}

              {/* size start  */}
              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium bg-black/[0.1] cursor-not-allowed opacity-50">
                  UK 6
                </div>
              </div>
              {/* size end  */}

              {/* show error start  */}
              <div className="text-red-600 mt-1">
                Size selection is required
              </div>
              {/* show error end  */}
            </div>
            {/* product size range end  */}

            {/* ADD TO CART BUTTON START */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to cart
            </button>
            {/* ADD TO CART BUTTON END */}
            {/* whishlist BUTTON START */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
            </button>
            {/* whishlist BUTTON END */}

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="text-md mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                dolor fugiat, facilis maiores illo sequi adipisci aliquid nisi,
                voluptatibus saepe consequuntur, odio odit dolorum facere eum
                error tempora hic? Tempore! Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Maxime voluptatem vel ratione!
                Esse, deleniti! Id adipisci ipsa porro velit debitis! Autem esse
                fugiat asperiores? Natus sapiente possimus vero iste asperiores.
              </div>
              <div className="text-md mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                dolor fugiat, facilis maiores illo sequi adipisci aliquid nisi,
                voluptatibus saepe consequuntur, odio odit dolorum facere eum
                error tempora hic? Tempore! Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Maxime voluptatem vel ratione!
                Esse, deleniti! Id adipisci ipsa porro velit debitis! Autem esse
                fugiat asperiores? Natus sapiente possimus vero iste asperiores.
              </div>
            </div>
          </div>
          {/* right column end  */}
        </div>
        <RelatedProducts />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
