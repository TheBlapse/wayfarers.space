"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const BottomStickyNavbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const navItems = [
    { href: "/apply", text: "apply" },
    { href: "/year-zero", text: "year zero" },
    { href: "/contact", text: "contact" },
    {
      href: "/discord",
      text: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 21 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5015 1.77537C16.2068 1.16964 14.8226 0.729424 13.3753 0.47876C13.1976 0.800102 12.9899 1.23231 12.8468 1.57614C11.3083 1.34477 9.78402 1.34477 8.27387 1.57614C8.13073 1.23231 7.91837 0.800102 7.73904 0.47876C6.29024 0.729424 4.90437 1.17126 3.60973 1.77858C0.998439 5.72458 0.290561 9.57257 0.644501 13.3659C2.37645 14.6593 4.05491 15.445 5.70505 15.9591C6.11248 15.3984 6.47585 14.8023 6.78888 14.1741C6.1927 13.9476 5.62168 13.668 5.08213 13.3434C5.22527 13.2374 5.36528 13.1265 5.50055 13.0125C8.7914 14.5517 12.367 14.5517 15.6185 13.0125C15.7554 13.1265 15.8954 13.2374 16.0369 13.3434C15.4958 13.6696 14.9232 13.9491 14.327 14.1757C14.6401 14.8023 15.0019 15.4 15.4109 15.9607C17.0626 15.4466 18.7426 14.6609 20.4746 13.3659C20.8899 8.96846 19.7651 5.15581 17.5015 1.77537ZM7.23722 11.033C6.24934 11.033 5.4392 10.1108 5.4392 8.98774C5.4392 7.86467 6.23204 6.94083 7.23722 6.94083C8.24242 6.94083 9.05254 7.86305 9.03524 8.98774C9.0368 10.1108 8.24242 11.033 7.23722 11.033ZM13.8819 11.033C12.894 11.033 12.0838 10.1108 12.0838 8.98774C12.0838 7.86467 12.8766 6.94083 13.8819 6.94083C14.887 6.94083 15.6972 7.86305 15.6799 8.98774C15.6799 10.1108 14.887 11.033 13.8819 11.033Z"
            fill="#BFBFBF"
          />
        </svg>
      ),
    },
    {
      href: "/x",
      text: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.9027 8.65473L19.3482 0H17.5838L11.119 7.51478L5.95547 0H0L7.8082 11.3637L0 20.4395H1.76443L8.59152 12.5036L14.0445 20.4395H20L11.9023 8.65473H11.9027ZM9.48608 11.4638L8.69495 10.3322L2.40018 1.32824H5.11025L10.1902 8.59475L10.9813 9.72632L17.5847 19.1717H14.8746L9.48608 11.4642V11.4638Z"
            fill="#BFBFBF"
          />
        </svg>
      ),
    },
  ];
  const preventScroll = (
    e: React.WheelEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => {
    e.preventDefault();
  };

  return (
    <nav
      className={
        "z-40 max-w-md w-10/12 md:max-w-2xl md:w-screen bg-white bg-opacity-[7%] backdrop-blur-[8px] rounded-full fixed items-center bottom-0 mb-3 left-1/2 transform -translate-x-1/2"
      }
    >
      <div className="w-full flex flex-wrap items-center justify-between px-10 py-1 md:py-2 ">
        <Link
          href="/"
          className="flex flex-row items-center hover:opacity-70 gap-3"
        >
          <Image src="/images/nav-logo.png" width={36} height={36} alt="logo" />
          <p className="text-darkheading2 font-head text-md font-medium">
            wayfarers space
          </p>
        </Link>
        <div className="hidden md:flex flex-row justify-evenly text-md items-center gap-3 text-darkheading2 font-head">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} className="hover:opacity-70">
              {item.text}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button
            className="hover:opacity-70 pt-[9px] focus:outline-none"
            onClick={() => toggleDropdown()}
          >
            <Menu color="#BFBFBF" size={16} />
          </button>
        </div>
        {isDropdownOpen && (
          <div
            onWheel={preventScroll}
            onTouchMove={preventScroll}
            style={{ overflow: "hidden" }}
            className="z-[55] scroll-m-0 md:hidden fixed -bottom-[0.8rem] left-1/2 transform -translate-x-1/2 bg-darkdark bg-opacity-100 overflow-hidden backdrop-opacity-50 backdrop-blur-xl h-screen w-screen flex flex-col justify-center text-md items-center gap-8 py-16 text-darkheading2 font-head"
          >
            <button
              className="hover:opacity-70 self-end self-start-end mr-8 focus:outline-none"
              onClick={() => toggleDropdown()}
            >
              <X color="#BFBFBF" size={18} />
            </button>
            {navItems.map((item, index) => (
              <Link key={index} href={item.href} className="hover:opacity-70">
                {item.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default BottomStickyNavbar;
