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
    <div className="fixed top-0 z-[39] flex w-screen flex-row items-center justify-evenly bg-black bg-opacity-[7%] py-3 backdrop-blur-md md:flex-row md:p-1.5">
      <X size="20" className="bg-transparent text-transparent" />
      <div className="flex flex-col items-center justify-center gap-1 text-center font-serif text-sm text-lightheading md:flex-row md:gap-4  md:text-left md:text-lg">
        <p>Join us for our first roundtable in Bengaluru, India</p>
        <Link href="/year-zero">
          <button
            className="text-lighttitle flex flex-row items-center gap-2 rounded-full bg-black bg-opacity-[14%] px-2 py-0.5 hover:opacity-70 md:px-6 md:py-[0.rem] "
            onClick={closeHeader}
          >
            Learn more{" "}
            <MoveRight className="h-4 w-4 md:h-6 md:w-6" color="#404040" />
          </button>
        </Link>
      </div>
      <X
        onClick={closeHeader}
        className="mt-0.5 h-4 w-4 cursor-pointer self-start md:mr-0 md:h-6 md:w-6 md:self-auto"
        color="#404040"
      />
    </div>
  ) : null;
};

export default Announcement;
