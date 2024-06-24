import category from "./category.json";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link  from "next/link";

type Cat = {
  icon: string;
  label: string;
};

export default function Category() {

  return (
    <section className="flex flex-col  p-4  ">
      <div className="flex justify-between ">
        <h4 className="text-2xl">Popular categories</h4>
        <Link
          className="flex justify-center items-center p-2 rounded text-black hover:bg-[var(--accent-color)] hover:text-white"
          href="/categories"
        >
          View All Categories <FaArrowRight />
        </Link>
      </div>
      <div className="max-w-[1000px] w-[calc(100% - 2rem)] m-auto">
        <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-2 ">
          {category.map((cat: Cat, i) => (
            <div
              key={i}
              className=" w-[200px] mx-2 my-2 h-[150px] flex justify-center flex-col items-center"
            >
              <Image src={cat.icon} alt={cat.label} width={200} height={200} />
              <h5>{cat.label}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
