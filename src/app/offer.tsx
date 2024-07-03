import React, { ReactElement } from "react";
import Image from "next/image";
import { GrCatalogOption } from "react-icons/gr";
import { BiBookContent } from "react-icons/bi";
import { GrResources } from "react-icons/gr";
import { MdLibraryBooks } from "react-icons/md";

type OfferIconProps = {
  icon: ReactElement; 
  label: string;
  description: string;
};
const OfferIcon = ({ icon, label, description }: OfferIconProps) => (
  <div className="py-4 pr-4">
    {icon}
    <h5 className="font-bold">{label}</h5>
    <h6>{description}</h6>
  </div>
);

const Offer = () => {
  return (
    <section className="flex justify-between items-center max-sm:flex-col p-4 max-md:flex-col max-lg:flex-col max-xl:flex-col">
      <Image src="/study.svg" width={500} height={500} alt="studying" />
      <div className="max-md:flex flex-col">
        <h4 className="text-3xl font-bold">
          We offer valuable materials in different formats.
        </h4>
        <div className="flex flex-col">
          <div className="flex">
            <OfferIcon
              icon={<GrCatalogOption size={18} color="var(--accent-color)" />}
              label="Course Catalog"
              description="A comprehensive catalog of courses, including descriptions, duration, and level of difficulty"
            />
            <OfferIcon
              icon={<BiBookContent size={18} color="var(--primary-color)" />}
              label="Course Content"
              description="Engaging and interactive course content, including video lectures, quizzes, and assignments"
            />
          </div>
          <div className="flex">
            <OfferIcon
              icon={<GrResources size={18} color="var(--active-color)" />}
              label="Resources"
              description="Dedicated support team to assist users with technical issues and learning-related queries."
            />
            <OfferIcon
              icon={<MdLibraryBooks size={18} color="var(--secondary-color)" />}
              label="Content Library"
              description="A vast library of learning content, including articles, videos, podcasts, and infographics"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
