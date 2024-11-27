

import Image from "next/image";

function AboutPage() {
  return (
    <section className="my-10">
      <h2 className="mb-2 px-2">About us</h2>
      <h3 className="w-3/4 text-6xl  font-medium mb-4">Making standard on the 
        <span className="text-gray-500"> collection of materials.</span></h3>
        <div className="mt-6 relative">
          <Image src="/reading.jpg" alt="reading"   width={800}
          height={600}
        className="rounded-lg"/>
        <div className="absolute top-32 left-2/4 bg-white h-60 w-80 rounded-md shadow-lg p-4 flex justify-center items-center flex-col">
          <h3 className="font-bold mb-2">Our Misson</h3>
          <p> We empower students and educators through collaborative learning. To aim at providing quick, reliable, and accessible learning materials to study challenges while fostering a community of knowledge sharing and academic growth.

</p>
        </div>
        </div>
    </section>
  );
}

export default AboutPage;
