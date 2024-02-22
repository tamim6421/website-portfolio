"use client";

const Faq = () => {
  return (
    <div className=" my-10 py-10">
      <div className="text-center p-5 ">
        <h1
          className="text-4xl text-[#0e047a] drop-shadow-lg font-bold"
          data-aos="fade-up"
        >
          <span className="">FAQ for Ancova</span> Software Development
        </h1>
        <hr className=" border-2 w-24 mt-2 border-orange-600 mx-auto" />
        <p className="text-xl" data-aos="fade-down">
          Register and browse professionals, explore projects, or even book a
          consultation.
        </p>
      </div>

      <div className=" p-3 w-3/4 mx-auto space-y-6">
        <div className="collapse collapse-arrow bg-blue-50">
          <input type="radio" name="my-accordion-2" defaultChecked="checked" />
          <div className="collapse-title text-xl font-medium">
            Know more about our company 
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-blue-50">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          Know more about our company 
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-blue-50">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          Know more about our company 
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        
        <div className="collapse collapse-arrow bg-blue-50">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          Know more about our company 
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Faq;
