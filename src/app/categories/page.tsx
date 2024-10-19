import Link from "next/link";
import categories from "../json/categories.json";
import Image from "next/image";

function CategoriesPage() {
  return (
    <div>
      <div className=" flex justify-center items-center  h-32 w-[calc(100% - 2rem)] rounded">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
          All Categories
        </h2>
      </div>
      {/* List of categories */}
      <div className="my-4">
        <ul className="ml-4 grid grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <li key={index} className="my-4">
              <figure
                key={index}
                className="  flex justify-center flex-col items-center "
              >
                <Image
                  src={category.image}
                  alt={category.label}
                  width={100}
                  height={100}
                  className="	"
                />

                <figcaption className="my-4">
                  <Link href={category.link} className="hover:underline">
                    {category.label}
                  </Link>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CategoriesPage;
