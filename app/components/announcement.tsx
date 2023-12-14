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
    <div className="fixed top-0 z-[39] flex w-screen flex-row items-center justify-evenly bg-black dark:bg-white bg-opacity-[7%] dark:bg-opacity-[7%] py-3 backdrop-blur-md md:flex-row md:p-1.5">
      <X size="20" className="bg-transparent text-transparent" />
      <div className="flex flex-col items-center justify-center gap-1 text-center font-serif text-sm text-lightheading dark:text-darkheading md:flex-row md:gap-4  md:text-left md:text-lg">
        <p>Join us for our first roundtable in Bengaluru, India</p>
        <Link href="/year-zero">
          <button
            className="flex flex-row items-center gap-2 rounded-full bg-black bg-opacity-[14%] px-2 py-0.5 text-lighttitle hover:opacity-70 dark:hover:opacity-70 dark:bg-white dark:bg-opacity-[14%] dark:text-darktitle md:px-6 md:py-[0.rem] "
            onClick={closeHeader}
          >
            Learn more{" "}
            <MoveRight className="h-4 w-4 text-lightheading dark:text-darkheading md:h-6 md:w-6" />
          </button>
        </Link>
      </div>
      <X
        onClick={closeHeader}
        className="mt-0.5 h-4 w-4 cursor-pointer self-start text-lightheading dark:text-darkheading md:mr-0 md:h-6 md:w-6 md:self-auto"
      />
    </div>
  ) : null;
};

export default Announcement;
