import React from "react";

const About = () => {
  return (
    <div className="flex w-full h-fit bg-gray-900">
      <div className="flex w-1/2 h-fit">
        {/* left side */}
        <img className="p-24 rounded-lg"
          src="https://sharonindustry.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout_us_image.b3112cb9.jpg&w=640&q=75"
          alt=""
        />
      </div>
      <div className="flex w-1/2 h-fit flex-col text-center  text-white gap-5">
        {/* rightside */}
        <h1 className="text-xl font-bold underline ">ABOUT US</h1>
        <p className="text-left font-semibold text-lg">
          Welcome to our Sharon Industries! We are a team of professionals
          dedicated to providing top-quality products for the construction
          industry. Our product line includes a wide range of designs, including
          pillars, water cuttings, wall designs, ventilations, parapet designs,
          and fencing. <br /><br /> Our products are made with the highest quality materials
          and techniques, ensuring that they are both beautiful and functional.
          We are committed to delivering exceptional customer service and stand
          behind our products with a satisfaction guarantee.<br /> <br /> Whether you're a
          contractor looking to add value to your projects or a homeowner
          looking to make a statement with your property, we have the products
          and expertise to help you achieve your goals. Thank you for
          considering our company for your concrete design needs. We look
          forward to working with you and helping bring your vision to life.
        </p>
      </div>
    </div>
  );
};

export default About;
