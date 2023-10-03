"use client";
import Link from "next/link";
import { X, MoveRight } from "lucide-react";

import { useState } from "react";

const Announcement = () => {
  const [close, setClose] = useState(false);

  const closeHeader = () => {
    setClose(true);
  };

  return !close ? (
    <div className="z-[39] w-screen flex flex-row md:flex-row top-0 justify-evenly items-center fixed py-3 md:p-1.5 bg-white bg-opacity-[7%] backdrop-blur-md">
      <X size="20" className="bg-transparent text-transparent" />
      <div className="flex flex-col text-center md:text-left md:flex-row items-center justify-center gap-1 md:gap-4 text-darkheading2 text-sm  md:text-lg font-serif">
        <p>Join us for our first round table in Bangalore, India</p>
        <Link href="/year-zero">
          <button className="flex flex-row gap-2 items-center rounded-full px-2 md:px-6 py-0.5 md:py-[0.rem] bg-white bg-opacity-[14%] hover:opacity-70 text-darkheading ">
            Learn more{" "}
            <MoveRight className="w-4 h-4 md:w-6 md:h-6" color="#BFBFBF" />
          </button>
        </Link>
      </div>
      <X
        onClick={closeHeader}
        className="w-4 h-4 md:w-6 md:h-6 self-start mt-0.5 md:self-auto md:mr-0 cursor-pointer"
        color="#BFBFBF"
      />
    </div>
  ) : null;
};

export default Announcement;
