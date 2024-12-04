import Heading from "./Heading.jsx";
import Para from "./Para.jsx";
import Img from "./Img.jsx";
import React from "react";

function block() {
  let notime = {
    heading: "NOTIME",
    para: "Create a react app and  in that create a component named block",
    image:
      "https://media.licdn.com/dms/image/v2/D560BAQHbphd_qRIA7g/company-logo_200_200/company-logo_200_200/0/1726123006694/notime_edu_logo?e=2147483647&v=beta&t=rp69sIus09S-SMK-p9E6QCRExmRXV1wOWkdA79htueU",
  };
  return (
    <div className="flex flex-col items-center">
      {
        // task 1.1
        /* <Heading/>
      <Para/>
      <Img/> */
        // task 1.2
      }
      {/* <Heading text="Notime" /> */}


      <Heading PropsHeading ={notime.heading} />
      <Para PropsPara= {notime.para}/>
      <Img Propsimg = {notime.image}/>
    </div>
  );
}

export default block;
