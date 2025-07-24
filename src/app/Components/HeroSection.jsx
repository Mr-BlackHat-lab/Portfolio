import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <section>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
        <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
          Hello, I'm MrBlackHAt
        </h1>
        <p className="text-[#ADB7BE] text-lg lg:text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          culpa, perferendis{" "}
        </p>
        </div>
        <div className="col-span-5">
            <div className="s">
                <Image src="/image/me.png"
                alt="mine image"
                width={500}
                height={400}
                className="rounded-full"
                />
            </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
