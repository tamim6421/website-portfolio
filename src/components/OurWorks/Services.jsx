import { FaDev } from "react-icons/fa6";

const Services = () => {
  return (
    <div className="mt-36">

      {/* our services  */}
      <div>
        <p className="text-center font-semibold text-[#0e047a] text-2xl md:text-4xl drop-shadow-md">
          Most Effective Software Development Outsourcing Service
        </p>
        <hr className=" border-2 w-24 mt-2 border-orange-500 mx-auto" />

        <p className=" w-3/4 md:w-7/12 mx-auto mt-3">
        As your software development partner, we are committed to helping you establish long-term business relationships. We offer a variety of outsourcing services that can be tailored to your specific needs. Our team of experts has extensive experience in all aspects of software development, from enterprise applications to mobile apps and everything in between.
        </p>
      </div>

      {/* service card sections  */}

      <div className="grid gap-6 mt-16 md:w-8/12  mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

      <div className="bg-gray-100 shadow-md text-center rounded-lg space-y-5 p-10 box">
              <p className="flex items-center justify-center">
                <FaDev className="text-5xl text-[#796eed]  " />
              </p>
              <p className="text-xl md:text-2xl font-semibold text-[#0e047a] drop-shadow-md">
                Hostel Managemnet
              </p>
              <p className="text-gray-500">
              High-performing product giving you a tailored solution for your business.
              </p>
            </div>
 
      <div className="bg-gray-100 shadow-md text-center rounded-lg space-y-5 p-10 box">
              <p className="flex items-center justify-center">
                <FaDev className="text-5xl text-[#796eed]  " />
              </p>
              <p className="text-xl md:text-2xl font-semibold text-[#0e047a] drop-shadow-md">
              Dining Management 
              </p>
              <p className="text-gray-500">
              High-performing product giving you a tailored solution for your business.
              </p>
            </div>
 
      <div className="bg-gray-100 shadow-md text-center rounded-lg space-y-5 p-10 box">
              <p className="flex items-center justify-center">
                <FaDev className="text-5xl text-[#796eed]  " />
              </p>
              <p className="text-xl md:text-2xl font-semibold text-[#0e047a] drop-shadow-md">
              Educationl Managemnet (School, Collage, Madrasha)
              </p>
              <p className="text-gray-500">
              High-performing product giving you a tailored solution for your business.
              </p>
            </div>
 
      <div className="bg-gray-100 shadow-md text-center rounded-lg space-y-5 p-10 box">
              <p className="flex items-center justify-center">
                <FaDev className="text-5xl text-[#796eed]  " />
              </p>
              <p className="text-xl md:text-2xl font-semibold text-[#0e047a] drop-shadow-md">
              Library Management 
              </p>
              <p className="text-gray-500">
              High-performing product giving you a tailored solution for your business.
              </p>
            </div>
 
      <div className="bg-gray-100 shadow-md text-center rounded-lg space-y-5 p-10 box">
              <p className="flex items-center justify-center">
                <FaDev className="text-5xl text-[#796eed]  " />
              </p>
              <p className="text-xl md:text-2xl font-semibold text-[#0e047a] drop-shadow-md">
              Organization Mangement 
              </p>
              <p className="text-gray-500">
              High-performing product giving you a tailored solution for your business.
              </p>
            </div>
 
      <div className="bg-gray-100 shadow-md text-center rounded-lg space-y-5 p-10 box">
              <p className="flex items-center justify-center">
                <FaDev className="text-5xl text-[#796eed]  " />
              </p>
              <p className="text-xl md:text-2xl font-semibold text-[#0e047a] drop-shadow-md">
                Alumni Management 
              </p>
              <p className="text-gray-500">
              High-performing product giving you a tailored solution for your business.
              </p>
            </div>

      <div className="bg-gray-100 shadow-md text-center rounded-lg space-y-5 p-10 box">
              <p className="flex items-center justify-center">
                <FaDev className="text-5xl text-[#796eed]  " />
              </p>
              <p className="text-xl md:text-2xl font-semibold text-[#0e047a] drop-shadow-md">
                Any Kind of Customized Management (as required)
              </p>
              <p className="text-gray-500">
              High-performing product giving you a tailored solution for your business.
              </p>
            </div>
 

      </div>
    </div>
  );
};

export default Services;
