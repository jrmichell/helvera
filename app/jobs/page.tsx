import Link from "next/link";
import Image from "next/image";
import JobCard from "../components/JobCard";
import Button from "../components/Button";
import Hero from "../../public/images/hero.png";

export default function Jobs() {
  return (
    <div>
      {/* Hero */}
      <section>
        <div className="left-[10%] text-md xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl absolute max-w-[50%] top-24 sm:top-28 bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold text-transparent p-4 md:p-10">
          <h1>Helvera Hosting</h1>
          <h1>Job Openings</h1>
        </div>
        <Image src={Hero} alt="Hero Image" className="w-full" />
      </section>
      {/* Job Openings Section */}
      <h1 className="font-bold text-center text-4xl mt-10 mb-5">
        Job Openings
      </h1>
      <section>
        <div className="flex justify-center items-center">
          <JobCard
            job="Web Developer"
            description="This career description is meant to be a simple placeholder."
          >
            <p className="text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
              natus repudiandae assumenda adipisci officia tenetur, optio
              dignissimos, ullam aut voluptatum delectus a! Consequuntur facilis
              illum ratione earum minima nesciunt fuga.
            </p>
            <div className="flex justify-center items-center m-2">
              <Button content="Apply Now" />
            </div>
          </JobCard>
          <JobCard
            job="Web Developer"
            description="This career description is meant to be a simple placeholder."
          >
            <p className="text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
              natus repudiandae assumenda adipisci officia tenetur, optio
              dignissimos, ullam aut voluptatum delectus a! Consequuntur facilis
              illum ratione earum minima nesciunt fuga.
            </p>
            <div className="flex justify-center items-center m-2">
              <Button content="Apply Now" />
            </div>
          </JobCard>
        </div>
      </section>
    </div>
  );
}
