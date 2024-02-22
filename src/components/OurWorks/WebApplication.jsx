
import { SiWebmoney } from "react-icons/si";

const WebApplication = () => {
    return (
        <div className="my-36">
               <div>
        <p className="text-center font-semibold text-[#0e047a] text-2xl md:text-4xl drop-shadow-md">
         Web Application Services
        </p>
        <hr className=" border-2 w-24 mt-2 border-orange-500 mx-auto" />

        <p className=" w-3/4 md:w-7/12 mx-auto mt-3">
        As your software development partner, we are committed to helping you establish long-term business relationships.
        </p>
      </div>

      {/* application category  */}
      <div className="grid gap-6 w-3/4 mx-auto mt-10 grid-cols-1 md:grid-cols-4 ">
        <div className="bg-blue-50 p-5 text-center text-gray-500 rounded-lg shadow-md">
            <p className="text-center flex items-center justify-center">
            <SiWebmoney className="text-5xl  " />
            </p>
            <p className=" mt-3 font-semibold drop-shadow-md">Domain Registation </p>
        </div>
        <div className="bg-blue-50 p-5 text-center text-gray-500 rounded-lg shadow-md">
            <p className="text-center flex items-center justify-center">
            <SiWebmoney className="text-5xl  " />
            </p>
            <p className="mt-3 font-semibold drop-shadow-md">Hoisting Management </p>
        </div>
        <div className="bg-blue-50 p-5 text-center text-gray-500 rounded-lg shadow-md">
            <p className="text-center flex items-center justify-center">
            <SiWebmoney className="text-5xl  " />
            </p>
            <p className="mt-3 font-semibold drop-shadow-md">Responsive Website Design </p>
        </div>
        <div className="bg-blue-50 p-5 text-center text-gray-500 rounded-lg shadow-md">
            <p className="text-center flex items-center justify-center">
            <SiWebmoney className="text-5xl  " />
            </p>
            <p className="mt-3 font-semibold drop-shadow-md">Dynamic Educationl Webiste Design </p>
        </div>
        <div className="bg-blue-50 p-5 text-center text-gray-500 rounded-lg shadow-md">
            <p className="text-center flex items-center justify-center">
            <SiWebmoney className="text-5xl  " />
            </p>
            <p className=" mt-3 font-semibold drop-shadow-md">E-commerce Website Design </p>
        </div>
        <div className="bg-blue-50 p-5 text-center text-gray-500 rounded-lg shadow-md">
            <p className="text-center flex items-center justify-center">
            <SiWebmoney className="text-5xl  " />
            </p>
            <p className=" mt-3 font-semibold drop-shadow-md">Portfolio Website Design </p>
        </div>

        <div className="bg-blue-50 p-5 text-center text-gray-500 rounded-lg shadow-md">
            <p className="text-center flex items-center justify-center">
            <SiWebmoney className="text-5xl  " />
            </p>
            <p className=" mt-3 font-semibold drop-shadow-md">Any Kinds of Coustomized Web Application (as required) </p>
        </div>
       
      </div>
        </div>
    );
};

export default WebApplication;