"use client";
import { LegacyRef, MouseEvent, useEffect, useRef, useState } from "react";
import { PiCaretLeftLight } from "react-icons/pi";
import { PiCaretDownLight } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import SubMenu from "./SubMenu";

export default function MegaMenu({
  show,
  data,
  setShow,
  screenWidth,
}: {
  show: boolean;
  data: any;
  setShow: any;
  screenWidth: number;
}) {
  const [subMenuShow, setSubMenuShow] = useState<number | null>(null);
  const handleChange = (e: MouseEvent<HTMLInputElement>) => {};
  const megaMenuRef: LegacyRef<HTMLDivElement> = useRef<any>();
  const handleClick = (category: any, subMenuShow: any) => {
    document.body.classList.add("no-scroll");

    setSubMenuShow(category.id === subMenuShow ? null : category.id);
  };
  // const [secondActive, setSecondActive] = useState(show);
  // const [previousWidth, setPreviousWidth] = useState(window.innerWidth);
  useEffect(() => {
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
  // useEffect(() => {
  // if (show) {
  //   document.body.classList.add("no-scroll");
  // } else if (!show || window.innerWidth > 768){
  //   document.body.classList.remove("no-scroll");
  // }
  //   const logScreenSize = () => {
  //     const currentWidth = window.innerWidth;
  //     if (currentWidth !== previousWidth) {
  //       // console.log(`Width: ${currentWidth}, Height: ${window.innerHeight}`);
  //       if (previousWidth > 768) {
  //         // document.body.classList.remove("no-scroll");
  //         console.log(1);

  //       }
  //       setPreviousWidth(currentWidth);
  //     }
  //   };
  //   window.addEventListener("resize", logScreenSize);
  //   return () => {
  //     window.removeEventListener("resize", logScreenSize);
  //   };
  // }, [previousWidth, show]);
  return (
    <>
      <div
        className={`${
          show ? "" : "hidden"
        } w-screen z-[200] h-screen absolute top-0 md:hidden`}
        style={{ background: "rgba(0,0,0,.5)" }}
      />
      <div
        className={`${
          show
            ? "pointer-events-auto md:opacity-1 translate-x-0"
            : "pointer-events-none opacity-0 translate-x-full"
        } flex flex-col md:flex-row md:gap-6 md:items-start justify-center py-4 px-1 md:translate-x-0 md:pointer-events-auto  text-black bg-gray-200 shadow-2xl w-[75%] sm:w-[80%] md:w-[70%] lg:w-1/2 z-[999] top-0 fixed md:relative md:top-[0px] right-0 md:right-[15%] lg:right-[25%] md:rounded-lg md:px-6 md:py-4 transition-all gap-6`}
        ref={megaMenuRef}
      >
        <div className={subMenuShow ? "md:w-[30%]" : "md:w-full"}>
          <div className="md:pt-4 md:whitespace-nowrap lg:text-2xl self-start text-blue-400 flex justify-between items-center w-full text-xl">
            <h3>دسته بندی ها</h3>
            <span
              className="text-red-700 md:hidden"
              onClick={() => setShow(false)}
            >
              <IoMdClose />
            </span>
          </div>
          <div className="py-4 self-center grid grid-cols-1 gap-10 md:gap-8 place-content-center w-full overflow-x-hidden">
            {data?.categories?.map((category: any, index: number) => (
              <div key={category.id}>
                <div>
                  <div
                    className="flex justify-between items-center mb-2"
                    // htmlFor={`example-${index}`}
                  >
                    {/* <input
                  id={`example-${index}`}
                  type="radio"
                  name="radio-examples"
                  value={category.name}
                  onClick={(e) => handleChange(e)}
                /> */}
                    <span>{category.name}</span>
                    <span
                      className="text-blue-400 text-2xl grid place-content-center cursor-pointer"
                      onClick={() => handleClick(category, subMenuShow)}
                    >
                      {subMenuShow === category.id ? (
                        <span className="text-gray-500">
                          <PiCaretDownLight />
                        </span>
                      ) : (
                        <span>
                          <PiCaretLeftLight />
                        </span>
                      )}
                    </span>
                  </div>
                  <SubMenu category={category} subMenuShow={subMenuShow} />
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
