import { url } from "inspector";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex  h-screen">
      <div style={{ width: '50%'}} className=" flex items-center justify-center">
        <div className=" w-80 space-y-5">
        <h1 className="text-5xl font-extrabold">À PROPOS <br /> DE MOI</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum ab
          repellat porro eaque aspernatur similique reprehenderit veniam
          asperiores distinctio, hic ad earum vel ea, obcaecati vitae a atque
          sed debitis!
        </p>
        </div>
      </div>
      <img src={'/img-1.jpeg'}  alt="test" style={{width: '50%', height: "100%", objectFit: 'cover', objectPosition: 'top'}}/>
    </div>
  );
};

export default About;
