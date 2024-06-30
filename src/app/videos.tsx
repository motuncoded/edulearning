import React from "react";
import { GiBookPile } from "react-icons/gi";
import { IoTimerOutline } from "react-icons/io5";

export default function Videos() {
  return (
    <section className="flex flex-col justify-center items-center p-4">
      <h4 className="text-3xl py-4">Popular courses</h4>
      <div className="max-w-[1000px] w-[calc(100% - 2rem)] m-auto">
        <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1 max-md:grid-cols-1 max-lg:grid-cols-2">
          <div className="shadow-md w-[325px] h-[375px] border rounded bg-[#FAF9F6] hover:shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/uWPIsaYpY7U?si=4eT9_84VL0EG3n-g?modestbranding=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              width="100%"
              height="250"
              allowFullScreen
            />
            <h5 className="px-2 my-2 text-gray-500 text-[.85rem]">
              Project management
            </h5>
            <h6 className="font-bold px-2 pb-2">
              Project Management Full Course
            </h6>
            <ul className="flex justify-between mt-4">
              <li className="flex items-center px-2">
                <GiBookPile className="text-[var(--accent-color)] mr-2" />
                24 Chapters
              </li>
              <li className="flex items-center px-2">
                <IoTimerOutline className="text-[var(--accent-color)] mr-2" />8
                hours
              </li>
            </ul>
          </div>
          <div className="shadow-md w-[325px] h-[375px] border rounded bg-[#FAF9F6]">
            <iframe
              width="325"
              height="250"
              src="https://www.youtube.com/embed/r8Dg0KVnfMA?si=rvQev70SvRLOCUFC"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
            <h5 className="px-2 my-2 text-gray-500 text-[.85rem]">
              Web development
            </h5>
            <h6 className="font-bold px-2 pb-2">React Query crash Course</h6>
            <ul className="flex justify-between mt-4">
              <li className="flex items-center px-2">
                <GiBookPile className="text-[var(--accent-color)] mr-2" />
                11 Chapters
              </li>
              <li className="flex items-center px-2">
                <IoTimerOutline className="text-[var(--accent-color)] mr-2" />
                49 minutes
              </li>
            </ul>
          </div>
          <div className="shadow-md w-[325px] h-[375px] border rounded bg-[#FAF9F6]">
            <iframe
              width="325"
              height="250"
              src="https://www.youtube.com/embed/hASHO5ap1Sw?si=L0mJOSPpBvtO_N1e"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
            <h5 className="px-2 my-2 text-gray-500 text-[.85rem]">Marketing</h5>
            <h6 className="font-bold px-2 pb-2">
              17 Years of Marketing Advice
            </h6>
            <ul className="flex justify-between mt-4">
              <li className="flex items-center px-2">
                <GiBookPile className="text-[var(--accent-color)] mr-2" />
                22 Chapters
              </li>
              <li className="flex items-center px-2">
                <IoTimerOutline className="text-[var(--accent-color)] mr-2" />
                46 minutes
              </li>
            </ul>
          </div>
          <div className=" ">
            <button
              type="submit"
              className="bg-[var(--primary-color)]  text-white w-[200px] p-2 hover:bg-[var(--hover-color)] border rounded max-sm:w-[325px] max-md:w-[325px] "
            >
              View all courses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
