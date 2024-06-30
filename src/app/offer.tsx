import React from "react";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import { GrCatalogOption } from "react-icons/gr";
import { BiBookContent } from "react-icons/bi";
import { GrResources } from "react-icons/gr";
import { MdLibraryBooks } from "react-icons/md";

export default function offer() {
  return (
    <section className="flex justify-between items-center max-sm:flex-col p-4 max-md:flex-col max-lg:flex-col max-xl:flex-col">
      <Image src="/study.svg" width={500} height={500} alt="studying" />
      <div className="max-md:flex flex-col">
        <h4 className="text-3xl font-bold">
          We offer valuable materials in different formats.
        </h4>
        <div className="flex flex-col ">
          <div className="flex ">
            <div className="py-4 pr-4">
              <GrCatalogOption
                size="18"
                className="text-[var(--accent-color)] "
              />
              <h5 className="font-bold"> Course Catalog</h5>
              <h6>
                A comprehensive catalog of courses, including descriptions,
                duration, and level of difficulty
              </h6>
            </div>
            <div className="py-4">
              <BiBookContent
                size="18"
                className="text-[var(--primary-color)]"
              />
              <h5 className="font-bold"> Course Content</h5>
              <h6>
                Engaging and interactive course content, including video
                lectures, quizzes, and assignments
              </h6>
            </div>
          </div>
          <div className="flex">
            <div className="py-4  pr-4">
              <GrResources size="18" className="text-[var(--active-color)]" />
              <h5 className="font-bold"> Resources</h5>
              <h6>
                Dedicated support team to assist users with technical issues and
                learning-related queries.
              </h6>
            </div>
            <div className="py-4">
              <MdLibraryBooks
                size="18"
                className="text-[var(--secondary-color)]"
              />
              <h5 className="font-bold"> Content Library</h5>
              <h6>
                A vast library of learning content, including articles, videos,
                podcasts, and infographics
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
