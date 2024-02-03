import { RiGlobalLine } from "react-icons/ri";

const OurWorks = () => {
  return (
    <div className="my-20 md:mt-36">
      {/* who we are section  */}
      <div>
        <p className="text-center font-semibold text-[#0e047a] text-2xl md:text-4xl drop-shadow-md ">
          Who We Are
        </p>
        <hr className=" border-2 w-24 mt-2 border-orange-500 mx-auto" />
        <p className=" w-3/4 md:w-7/12 mx-auto mt-3">
          Discover our social media links for updates, and a responsive menu for
          seamless browsing. represents the essence of our brand, embodying our
          values and identity.Social Media Links: Stay connected and follow us
          on our social media platforms. Engage with us on Facebook, Twitter,
          Instagram, and LinkedIn for the.
        </p>
      </div>

      {/* ancova works  */}
      <div className="mt-36 bg-blue-50 py-10">
        <p className="text-center font-semibold text-[#0e047a] text-2xl md:text-4xl drop-shadow-md">
          How Ancova Works
        </p>
        <hr className=" border-2 w-24 mt-2 border-orange-500 mx-auto" />

        <p className=" w-3/4 md:w-7/12 mx-auto mt-3">
          We follow agile methodology to deliver a high quality task to meet
          established deadline. A business can choose the software outsourcing
          business model that best matches their needs. We will help them
          augment their core competencies.
        </p>

        {/* work statistics  */}
        <div className="md:w-8/12 mt-16 mx-auto">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">


            {/* card 1 */}
            <div className="bg-white shadow-md rounded-lg space-y-5  p-10">
              <p>
                <RiGlobalLine className="text-5xl text-[#796eed]  " />
              </p>
              <p className="text-xl md:text-2xl font-semibold text-[#0e047a] drop-shadow-md">
                Team Augmentation
              </p>
              <p className="text-gray-500">
                Our team of expert software engineers provides additional
                support to your in-house team, ensuring a seamless collaboration
                and a boosted workflow. With our support, you can tackle even
                the most complex projects with confidence.
              </p>

              <div>
                <button className="flex text-blue-600 hover:bg-blue-600 hover:text-white btn-sm btn items-center gap-2">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* card 1 */}
            <div className="bg-white shadow-md rounded-lg space-y-5 p-10">
              <p>
                <RiGlobalLine className="text-5xl text-[#796eed]  " />
              </p>
              <p className="text-xl md:text-2xl font-semibold text-[#0e047a] drop-shadow-md">
                Team Augmentation
              </p>
              <p className="text-gray-500">
                Our team of expert software engineers provides additional
                support to your in-house team, ensuring a seamless collaboration
                and a boosted workflow. With our support, you can tackle even
                the most complex projects with confidence.
              </p>

              <div>
                <button className="flex text-blue-600 hover:bg-blue-600 hover:text-white btn-sm btn items-center gap-2">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* card 1 */}
            <div className="bg-white shadow-md rounded-lg space-y-5 p-10">
              <p>
                <RiGlobalLine className="text-5xl text-[#796eed]  " />
              </p>
              <p className="text-xl md:text-2xl font-semibold text-[#0e047a] drop-shadow-md">
                Team Augmentation
              </p>
              <p className="text-gray-500">
                Our team of expert software engineers provides additional
                support to your in-house team, ensuring a seamless collaboration
                and a boosted workflow. With our support, you can tackle even
                the most complex projects with confidence.
              </p>

              <div>
                <button className="flex text-blue-600 hover:bg-blue-600 hover:text-white btn-sm btn items-center gap-2">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>


          </div>
        </div>

        
           
      </div>
    </div>
  );
};

export default OurWorks;
