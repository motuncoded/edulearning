import categories from "./json/category.json";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

type Cat = {
  icon: string;
  label: string;
};

export default function Category() {
  return (
    <section className="flex flex-col  p-4  ">
      <div className="flex justify-between items-center max-sm:flex-col max-sm:pb-4">
        <h4 className="text-2xl max-sm:pb-2">Popular categories</h4>
        <Link
          className="flex justify-center items-center p-2 rounded text-black hover:bg-[var(--accent-color)] hover:text-white max-sm:bg-[var(--accent-color)] max-sm:text-white"
          href="/categories"
        >
          View All Categories <FaArrowRight />
        </Link>
      </div>
      <div className="max-w-[1000px] w-[calc(100% - 2rem)] m-auto">
        <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-1 max-lg:grid-cols-3 ">
          {categories.map((category, index) => (
            <figure
              key={index}
              className=" w-[200px] mx-2 my-2 h-[150px] flex justify-center flex-col items-center max-sm:m-0"
            >
              <Image
                src={category.icon}
                alt={category.label}
                width={200}
                height={200}
                className="	"
              />

              <figcaption>{category.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
