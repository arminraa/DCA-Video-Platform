// "use client";
import Link from "next/link";
// import { useEffect } from "react";

export default function SubMenu({
  subMenuShow,
  subItems,
  itemName,
  setSubMenuShow,
  setShow,
}: any) {
  // useEffect(() => {
  //   if (JSON.stringify(subItems) === "[]") {
  //     setSubMenuShow(null);
  //   }
  // }, []);

  return (
    <ul
      // style={{ transition: "all 300ms ease-in-out" }}

      className={`${
        subMenuShow === itemName
          ? "pointer-events-auto h-[120px] overflow-auto opacity-1"
          : "pointer-events-none h-0 overflow-hidden opacity-0"
      } bg-gray-300 flex flex-col md:pointer-events-auto md:h-auto md:overflow-auto md:grid md:grid-cols-3 md:gap-6 md:bg-transparent items-start gap-2 pr-2 md:left-[10%] md:right-[40%] md:top-20 md:absolute transition-opacity z-[200]`}
    >
      {subItems &&
        subItems.map((child: any) => (
          <li
            className={
              subMenuShow === itemName
                ? "pointer-events-auto"
                : "pointer-events-none"
            }
            key={child.slug}
            onClick={() => setShow(false)}
          >
            <Link href={`/${child.slug}`}>{child.name}</Link>
          </li>
        ))}
    </ul>
  );
}
