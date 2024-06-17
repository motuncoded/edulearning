import React from 'react'
import Image from "next/image";
import { TiTick } from "react-icons/ti";

export default function offer() {
  return (
    <section className='flex justify-between items-center'>
          <div>
              <Image  src="/study.svg"  width={500} height={500}alt="studying"/>
          </div>
          <div>
              <h4 className="text-3xl font-bold">We offer valuable materials in different formats</h4>
              <div className="flex flex-col">
              <div className="flex">
                  <div>
                      <TiTick className="bg-[var(--accent-color)] text-[var(--background-color)] rounded-full w-[20px] h-[20px]" />
                      <h5> Course Catalog</h5>
                      <h6>A comprehensive catalog of courses, including descriptions, duration, and level of difficulty</h6>
                  </div>
                  <div>
                      <TiTick className="bg-[var(--primary-color)] text-[var(--background-color)] rounded-full w-[20px] h-[20px]" />
                      <h5> Course Catalog</h5>
                      <h6>A comprehensive catalog of courses, including descriptions, duration, and level of difficulty</h6>
                  </div>
                  </div>
                  <div className="flex">
                  <div>
                      <TiTick className="bg-[var(--active-color)] text-[var(--background-color)] rounded-full w-[20px] h-[20px]" />
                      <h5> Course Catalog</h5>
                      <h6>A comprehensive catalog of courses, including descriptions, duration, and level of difficulty</h6>
                  </div>
                  <div>
                      <TiTick className="bg-[var(--secondary-color)] text-[var(--background-color)] rounded-full w-[20px] h-[20px]" />
                      <h5> Course Catalog</h5>
                      <h6>A comprehensive catalog of courses, including descriptions, duration, and level of difficulty</h6>
                      </div>
                      </div>
          </div>
          </div>

          
    </section>
  )
}
