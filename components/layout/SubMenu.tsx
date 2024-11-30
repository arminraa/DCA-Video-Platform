"use client";
import Link from "next/link";
import { TransitionEvent, useEffect } from "react";

export default function SubMenu({
  subMenuShow,
  subItems,
  itemName,
  setSubMenuShow,
  setShow,
}: any) {
  useEffect(() => {
    if (JSON.stringify(subItems) === "[]") {
      setSubMenuShow(null);
    }
  }, []);
  // const handleTransitionEnd = () => {
  //   if (subMenuShow != itemName) {
  //     document.getElementById("list")!.classList.replace("opacity-0", "hidden");
  //   } else {
  //     document.getElementById("list")!.classList.replace("opacity-100", "");
  //   }
  // };

  return (
    <ul
      id="list"
      style={{
        transition: "all 100ms ease-in-out",
      }}
      className={
        subMenuShow == itemName
          ? "flex flex-col max-h-[350px] md:h-auto md:overflow-auto md:grid md:grid-cols-3 md:bg-transparent items-start gap-6 pr-6  md:pr-0 md:left-[10%] md:right-[40%] md:top-20 md:absolute transition-opacity list-disc md:list-none"
          : "hidden flex-col h-0 overflow-hidden md:h-auto md:overflow-auto md:grid-cols-3 md:bg-transparent items-start gap-6 pr-6 md:pr-0 md:left-[10%] md:right-[40%] md:top-20 md:absolute transition-opacity list-disc md:list-none"
      }
      // onTransitionEnd={handleTransitionEnd}
    >
      {subItems &&
        subItems.map((child: any) => (
          <li key={child.slug}>
            <Link onClick={() => setShow(false)} href={`/${child.slug}`}>
              {child.name}
            </Link>
          </li>
        ))}
    </ul>
  );
}
