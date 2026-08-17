import { Category } from "@/types/category";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const SingleItem = ({ item }: { item: Category }) => {
  return (
    <Link href={`/shop?category=${item.slug}`} className="group flex flex-col items-center">
      <div
        className="max-w-[130px] w-full h-32.5 rounded-full flex items-center justify-center mb-4 border border-neutral-200 my-4 relative overflow-hidden"
        style={{
          background: "#ffffff",
          backgroundImage: `
            radial-gradient(
              circle at 50% 0%,
              rgba(255, 140, 60, 0.5),
              transparent 70%
            )
          `,
          backgroundRepeat: "no-repeat",
        }}
      >
        <Image src={item.img} alt={item.title} width={82} height={62} />
      </div>

      <div className="flex justify-center">
        <h3 className="inline-block font-medium text-center text-dark bg-gradient-to-r from-blue to-blue bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px] group-hover:text-blue">
          {item.title}
        </h3>
      </div>
    </Link>
  );
};

export default SingleItem;
