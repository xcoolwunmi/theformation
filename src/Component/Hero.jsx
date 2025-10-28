import React from "react";

function Hero() {
  return (
    <div className="relative w-full h-auto">
      <img
        src="https://res.cloudinary.com/reformation/image/upload/c_scale,w_3840,w_1920/v1/home%20banner%202025/10.26.Holiday-Party-Dressing.Desktop?_i=AH"
        alt="holiday collection"
        className="w-full"
      />

      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white ">
        <h2 className="text-6xl md:text-5xl  mb-3 drop-shadow-lg">
          The Holiday Collection
        </h2>
        <p className="text-lg md:text-xl drop-shadow-md">
          Beat Maria to the punch
        </p>
      </div>
    </div>
  );
}

export default Hero;
