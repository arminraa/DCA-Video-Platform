"use client";
import { BiCategory } from "react-icons/bi";
import { IoBook } from "react-icons/io5";
import { FaStore } from "react-icons/fa";
import Link from "next/link";
import HeadDropdown from "./HeadDropdown";
import { useState } from "react";
export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const handleMouseEnter = () => {
    setIsVisible(true);
  };
  const handleMouseLeave = () => {
    setIsVisible(true);
  };
  return (
    <>
      <header className="bg-gradient-to-r from-blue to-blue-400 w-full text-white">
        <nav className="container mx-auto max-w-7xl w-[95vw] flex justify-between items-center">
          <ul className="flex justify-start items-center gap-8">
            <li className=" py-10 flex justify-center items-center gap-2 text-lg cursor-pointer">
              <Link
                href="#"
                className="flex justify-center items-center gap-2 md:text-lg text-md cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <BiCategory className="md:text-3xl text-xl" />
                دسته بندی ویدیو
              </Link>
            </li>

            <li className="py-10 hidden md:flex justify-center items-center gap-2 text-lg cursor-pointer">
              <IoBook className="text-3xl" />
              مجله آموزشی
            </li>
            <li className="py-10 hidden md:flex justify-center items-center gap-2 text-lg cursor-pointer">
              <FaStore className="text-3xl" />
              فروشگاه
            </li>
          </ul>
          <div className="flex flex-col justify-center items-start cursor-pointer">
            <Link href="/">
              <h1 className="text-4xl cursor-pointer font-extralight">
                dca video
              </h1>
            </Link>
            <h3>ویدیو سیستم های حفاظتی</h3>
          </div>
        </nav>
      </header>
      <HeadDropdown display={isVisible ? "block" : "hidden"} />
    </>
  );
}
