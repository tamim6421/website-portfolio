import Image from "next/image";
import project from "@/assets/st1.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";


const OurProject = () => {
  return (
    <div className=" mx-auto bg-blue-50 p-5 py-20">
    <div className=" md:w-3/4 mx-auto">
    <div>
        <p className="text-center font-semibold text-[#0e047a] text-2xl md:text-4xl drop-shadow-md">
          Our Custom Software Development Products
        </p>
        <hr className=" border-2 w-24 mt-2 border-orange-600 mx-auto" />

        <p className=" w-3/4 md:w-7/12 mx-auto  text-gray-600 mt-3">
          As your software development partner, we are committed to helping you
          establish long-term business relationships.
        </p>
      </div>

      <div className="grid mt-8 gap-7 grid-cols-1 md:grid-cols-2">
        {/* Project 1  */}
        <div className=" rounded-lg">
          <div className="rounded-lg box">
            <Image
              src={project}
              className="rounded-lg"
              alt="project Image"
              width={600}
              height={600}
            ></Image>
          </div>
          <div className="mt-4">
            <p className="text-xl font-bold text-gray-600">Amader Hostel</p>
            <p className=" text-gray-600">
              Amader Hostel is a dining management softwere system that allows
              users to monitor and control their water usage and consumption
              through a mobile app or website
            </p>
            <Link href={"/projects"}>
              <button className="btn">
                Explore Now
                <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
        {/* Project 1  */}
        <div>
          <div className="rounded-lg box">
            <Image
              src={project}
              className="rounded-lg"
              alt="project Image"
              width={600}
              height={600}
            ></Image>
          </div>
          <div className="mt-4">
            <p className="text-xl font-bold text-gray-600">Amader Hostel</p>
            <p>
              Amader Hostel is a dining management softwere system that allows
              users to monitor and control their water usage and consumption
              through a mobile app or website
            </p>
            <button className="btn">
              Explore Now
              <FaArrowRightLong />
            </button>
          </div>
        </div>
        {/* Project 1  */}
        <div className="mt-5">
          <div className="rounded-lg box">
            <Image
              src={project}
              className="rounded-lg"
              alt="project Image"
              width={600}
              height={600}
            ></Image>
          </div>
          <div className="mt-4">
            <p className="text-xl font-bold text-gray-600">Amader Hostel</p>
            <p>
              Amader Hostel is a dining management softwere system that allows
              users to monitor and control their water usage and consumption
              through a mobile app or website
            </p>
            <button className="btn">
              Explore Now
              <FaArrowRightLong />
            </button>
          </div>
        </div>
        {/* Project 1  */}
        <div className="mt-5">
          <div className="rounded-lg box">
            <Image
              src={project}
              className="rounded-lg"
              alt="project Image"
              width={600}
              height={600}
            ></Image>
          </div>
          <div className="mt-4">
            <p className="text-xl font-bold text-gray-600">Amader Hostel</p>
            <p>
              Amader Hostel is a dining management softwere system that allows
              users to monitor and control their water usage and consumption
              through a mobile app or website
            </p>
            <button className="btn">
              Explore Now
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OurProject;
