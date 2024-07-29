import React from "react";
import Image from "next/image";

export default function More() {
  return (

    <section className="my-4 p-2 relative min-h-screen">

      <h4 className="text-2xl font-medium">More about Edulearning</h4>
      <p>
        Getting the authetic learning materials from books, videos to podcasts.{" "}
      </p>
      <div className="relative p-4 lg:flex hidden md:hidden sm:hidden">
        <div className="absolute top-32  rounded-xl ">
          <Image src="/watching.jpg" width={400} height={300} alt="Watching" />
        </div>
        <div className=" absolute top-80 right-96  ">
          <Image src="/books.jpg" width={400} height={100} alt="Books" />
        </div>
        <div className=" absolute  right-0">
          <Image
            src="/headphone.jpg"
            width={350}
            height={300}
            alt="headphone"
          />
        </div>
      </div>
 
      <div className="flex flex-col p-4 lg:hidden ">

        {[
          { src: "/watching.jpg", alt: "Watching" },
          { src: "/books.jpg", alt: "Books" },
          { src: "/headphone.jpg", alt: "headphone" },
        ].map((image, index) => (
 
          <div key={index} className="mb-4 relative">

            <Image src={image.src} width={400} height={300} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
