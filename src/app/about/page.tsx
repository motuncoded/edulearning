import Image from "next/image";

function AboutPage() {
  return (
    <section className="my-10 p-4">
      <h1 className="mb-2 px-2 max-sm:px-0">About us</h1>
      <h2 className="w-3/4 text-6xl  font-semibold mb-4 max-sm:text-4xl">
        Making standard on the
        <span className="text-gray-500"> collection of materials.</span>
      </h2>
      <div className="mt-6 relative">
        <Image
          src="/reading.jpg"
          alt="reading"
          width={800}
          height={600}
          className="rounded-lg"
        />

        <div className="max-sm:hidden  max-xl:hidden absolute top-32 left-2/4 bg-white h-60 w-80 rounded-md shadow-lg p-4 flex justify-center items-center flex-col">
          <h3 className="font-bold mb-2">Our Misson</h3>
          <p className="text-[.975rem]">
            {" "}
            We empower students and educators through collaborative learning. To
            aim at providing quick, reliable, and accessible learning materials
            to study challenges while fostering a community of knowledge sharing
            and academic growth.
          </p>
        </div>
      </div>
      <div className="mt-10 flex justify-around  max-sm:flex-col max-sm:items-start">
        <h4 className="w-2/6 text-4xl font-semibold max-sm:w-full max-sm:my-4 max-xl:w-full">
          We do this
          <span className="text-gray-500 "> for a single reason</span>
        </h4>
        <div className="w-2/6 max-sm:w-full max-xl:w-full">
          <p className="text-gray-500 ">
            The entire{" "}
            <span className="text-[var(--accent-color)]">edulearning</span>{" "}
            materials are shared among learners form different parts of the
            world.
          </p>
          <p className="text-gray-500 ">
            We are passionate about the freedom of learning at your own pace. As
            it will attract different people from different region to diverse
            and interesting people to learn together.
          </p>
          <br />
          <p className="text-gray-500 ">
            Opportunity to collaborate and network with other learners that
            speak different language and with opinion and prospective.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
