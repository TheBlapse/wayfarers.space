"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import ThemeToggle from "./theme-toggle";

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
      text: "discord",
    },
    {
      href: "/x",
      text: "x",
    },
  ];
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preventScroll = (e: WheelEvent | TouchEvent) => {
      e.preventDefault();
    };

    const dropdown = dropdownRef.current;
    if (dropdown) {
      dropdown.addEventListener("wheel", preventScroll, { passive: false });
      dropdown.addEventListener("touchmove", preventScroll, { passive: false });
    }

    return () => {
      if (dropdown) {
        dropdown.removeEventListener("wheel", preventScroll);
        dropdown.removeEventListener("touchmove", preventScroll);
      }
    };
  }, []);

  return (
    <>
      <nav
        className={
          "fixed bottom-0 left-1/2 z-40 mb-6 w-10/12 max-w-md -translate-x-1/2 transform items-center rounded-full bg-black bg-opacity-[5%] backdrop-blur-[8px] dark:bg-white dark:bg-opacity-[5%] md:w-screen md:max-w-2xl"
        }
      >
        <div className="flex w-full flex-wrap items-center justify-between px-10 py-1 md:py-2 ">
          <Link
            href="/"
            className="flex flex-row items-center gap-3  hover:opacity-70 dark:hover:opacity-70"
          >
            <Image
              className="hidden dark:block"
              src="/images/nav-logo-dark.png"
              width={28}
              height={28}
              alt="logo"
            />
            <Image
              className="block dark:hidden"
              src="/images/nav-logo-light.png"
              width={28}
              height={28}
              alt="logo"
            />
            <p className="text-md font-head font-medium text-lightheading dark:text-darkheading">
              Wayfarers Space
            </p>
          </Link>
          <div className="text-md hidden flex-row items-center justify-evenly gap-3 font-head text-lightheading dark:text-darkheading md:flex">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className=" hover:opacity-70 dark:hover:opacity-70"
              >
                {item.text}
              </Link>
            ))}
            <ThemeToggle />
          </div>
          <div className="flex flex-row-reverse gap-4 align-middle md:hidden">
            <button
              className="hover:opacity-70 focus:outline-none dark:hover:opacity-70"
              onClick={() => toggleDropdown()}
            >
              <Menu
                className="text-lightheading dark:text-darkheading"
                size={16}
              />
            </button>
            <ThemeToggle />
          </div>
        </div>
      </nav>
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          style={{ overflow: "hidden" }}
          className="text-md fixed bottom-0 left-1/2 z-[55] flex h-screen w-screen -translate-x-1/2 transform scroll-m-0 flex-col items-center justify-center gap-8 overflow-hidden bg-lightbg bg-opacity-100 py-16 font-head text-lightheading backdrop-blur-xl backdrop-opacity-50 dark:bg-darkbg dark:bg-opacity-100 dark:text-darkheading dark:backdrop-opacity-50 md:hidden"
        >
          <button
            className="self-start-end mr-8 self-end hover:opacity-70 focus:outline-none dark:hover:opacity-70"
            onClick={() => toggleDropdown()}
          >
            <X className="text-lightheading dark:text-darkheading" size={18} />
          </button>
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={toggleDropdown}
              className="hover:opacity-70 dark:hover:opacity-70"
            >
              {item.text}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default BottomStickyNavbar;
