"use client";
import { LegacyRef, useEffect, useRef, useState } from "react";
import { PiCaretLeftLight } from "react-icons/pi";
import { PiCaretDownLight } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import SubMenu from "./SubMenu";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function MegaMenu({
  show,
  menuItems,
  setShow,
  screenWidth,
}: {
  menuItems: any;
  show: boolean;
  setShow: any;
  screenWidth: number;
}) {
  const [subMenuShow, setSubMenuShow] = useState<number | null>(null);
  const [subItemsIsEmpty, setSubItemsIsEmpty] = useState(false);
  const megaMenuRef: LegacyRef<HTMLDivElement> = useRef<any>();
  const handleClick = (item: any, subMenuShow: any) => {
    document.body.classList.add("no-scroll");
    setSubMenuShow(
      item.name === subMenuShow || !(item.children.length > 0)
        ? null
        : item.name
    );
    // setSubMenuShow(null);
  };

  useEffect(() => {
    // const a = useMediaQuery('(min-width:768px)');
    window.addEventListener("resize", () => {
      if (
        document.body.classList.contains("no-scroll") &&
        window.innerWidth > 768
      ) {
        document.body.classList.remove("no-scroll");
      }
      if (
        !document.body.classList.contains("no-scroll") &&
        window.innerWidth < 768
      ) {
        document.body.classList.add("no-scroll");
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        if (
          document.body.classList.contains("no-scroll") &&
          window.innerWidth > 768
        ) {
          document.body.classList.remove("no-scroll");
        }
        if (
          !document.body.classList.contains("no-scroll") &&
          window.innerWidth < 768
        ) {
          document.body.classList.add("no-scroll");
        }
      });
    };
  }, [window.innerWidth]);

  useEffect(() => {
    if (show) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    if (screenWidth > 768) {
      document.body.classList.remove("no-scroll");
    }
  }, [show]);

  return (
    <>
      <div
        className={`${
          show ? "" : "hidden"
        } w-screen z-[200] h-screen absolute top-0 md:hidden`}
        style={{ background: "rgba(0,0,0,.5)" }}
      />
      <div
        onMouseLeave={() => setShow(false)}
        className={`${
          show
            ? "pointer-events-auto opacity-1 translate-x-0"
            : "pointer-events-none opacity-0 translate-x-full"
        } flex flex-col md:flex-row md:gap-6 md:items-start justify-center py-4 px-1 md:translate-x-0 text-black bg-gray-200 shadow-2xl w-[75%] sm:w-[80%] md:w-[70%] lg:w-1/2 z-[999] top-0 fixed md:relative md:top-[0px] right-0 md:right-[15%] lg:right-[25%] md:rounded-lg md:px-6 md:py-4 transition-all gap-6`}
        ref={megaMenuRef}
      >
        <div className={subMenuShow ? "md:w-[30%]" : "md:w-full"}>
          <div className="md:pt-4 md:whitespace-nowrap lg:text-2xl self-start text-blue-400 flex justify-between items-center w-full text-xl">
            <h3 className="pb-2 border-b-2 border-blue-400">دسته بندی ها</h3>
            <span
              className="text-red-700 md:hidden"
              onClick={() => setShow(false)}
            >
              <IoMdClose />
            </span>
          </div>
          <div className="py-4 self-center grid grid-cols-1 gap-10 md:gap-8 place-content-center w-full overflow-x-hidden">
            {menuItems?.data.map((item: any) => (
              <div key={item.name}>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span>{item.name}</span>
                    {item.children.length > 0 && (
                      <span
                        style={{ transition: "all 300ms ease-in-out" }}
                        className="text-blue-400 text-2xl grid place-content-center cursor-pointer"
                        onClick={() => handleClick(item, subMenuShow)}
                      >
                        {subMenuShow === item.name ? (
                          <span className="text-gray-500 cursor-pointer">
                            <PiCaretDownLight className="cursor-pointer" />
                          </span>
                        ) : (
                          <span className="cursor-pointer">
                            <PiCaretLeftLight className="cursor-pointer" />
                          </span>
                        )}
                      </span>
                    )}
                  </div>
                  <SubMenu
                    subItems={item?.children}
                    subMenuShow={subMenuShow}
                    itemName={item.name}
                    setSubMenuShow={setSubMenuShow}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`w-0 overflow-hidden md:overflow-y-auto md:max-h-[700px] ${
            subMenuShow ? "md:w-[70%]" : "md:w-0"
          }  md:pt-4`}
        ></div>
      </div>
    </>
  );
}
