import Link from "next/link";
import React from "react";
import { Data, Menu } from "@/types/types";
import { BsChevronDown } from "react-icons/bs";

let data: Data[] = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true, url: "" },
  { id: 4, name: "Contact", url: "/contact" },
];

// const subMenuData = [
//   { id: 1, name: "Jordan", doc_count: 11 },
//   { id: 2, name: "Sneakers", doc_count: 8 },
//   { id: 3, name: "Running shoes", doc_count: 64 },
//   { id: 4, name: "Football shoes", doc_count: 107 },
// ];

const Menu = ({ showCatMenu, setShowCatMenu, categories }: Menu) => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {data?.map((item): any => {
        // console.log(item.url);

        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer flex items-center gap-2 relative "
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
              >
                {item.name}
                <BsChevronDown size={14} />
                {showCatMenu && (
                  <ul
                    className="bg-white absolute top-6 left-0 
                    min-w-[50px ] px-1 py-1 text-black shadow-lg"
                  >
                    {categories?.map(
                      ({
                        attributes: c,
                        id,
                      }: {
                        id: number;
                        attributes: any;
                      }) => {
                        return (
                          <Link
                            href={`/category/${c?.slug}`}
                            key={id}
                            onClick={() => setShowCatMenu(false)}
                          >
                            <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.3] rounded-md">
                              {c?.name}
                              <span className="opacity-50 text-sm">
                                {" "}
                                {`(${c?.products.data.length})`}
                              </span>
                            </li>
                          </Link>
                        );
                      }
                    )}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer">
                <Link href={item?.url}>{item?.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
