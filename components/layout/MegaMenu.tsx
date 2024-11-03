"use client";
import { LegacyRef, MouseEvent, useEffect, useRef, useState } from "react";
import { PiCaretLeftLight } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import SubMenu from "./SubMenu";

export default function MegaMenu({
  show,
  data,
  setShow,
}: {
  show: boolean;
  data: any;
  setShow: any;
}) {
  const [subMenuShow, setSubMenuShow] = useState<number | null>(null);
  const handleChange = (e: MouseEvent<HTMLInputElement>) => {};
  const megaMenuRef: LegacyRef<HTMLDivElement> = useRef<any>();
  const handleClick = (category: any, subMenuShow: any) => {
    document.body.classList.add("no-scroll");

    setSubMenuShow(category.id === subMenuShow ? null : category.id);
  };
  // const [secondActive, setSecondActive] = useState(show);
  useEffect(() => {
    if (show) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [show]);
  return (
    <>
      <div
        className={`${
          show ? "" : "hidden"
        } w-screen z-[200] h-screen absolute top-0`}
        style={{ background: "rgba(0,0,0,.5)" }}
      />
      <div
        className={`${
          show
            ? "pointer-events-auto translate-x-0"
            : "pointer-events-none opacity-0 translate-x-full"
        } py-4 px-1 flex flex-col justify-center  text-black bg-gray-200 shadow-2xl w-[75%] sm:w-[80%] md:w-1/2 z-[999] top-0 fixed md:top-[110%] right-0 transition-all gap-6`}
        ref={megaMenuRef}
      >
        <div className="md:text-lg lg:text-2xl self-start text-blue-400 flex justify-between items-center w-full text-xl">
          <h3>دسته بندی ها</h3>
          <span className="text-red-700" onClick={() => setShow(false)}>
            <IoMdClose />
          </span>
        </div>
        <div className="py-4 self-center grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 place-content-center w-full overflow-x-hidden">
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
                    className="text-blue-400 text-2xl grid place-content-center"
                    onClick={() => handleClick(category, subMenuShow)}
                  >
                    <PiCaretLeftLight />
                  </span>
                </div>
                <SubMenu category={category} subMenuShow={subMenuShow} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
