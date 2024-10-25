"use client";
import { MouseEvent, useEffect } from "react";

export default function MegaMenu({ show, data }: { show: boolean; data: any }) {
  const handleChange = (e: MouseEvent<HTMLInputElement>) => {
    //@ts-ignore
    // console.log(e.target.value);
  };
  useEffect(() => {

  },[])
  return (
    <div
      className={`${
        show ? "pointer-events-auto opacity-1" : "pointer-events-none opacity-0"
      } py-10 px-10 flex flex-col justify-between absolute text-black bg-gray-200 shadow-2xl w-full sm:w-[80%] md:w-1/2 z-[999] top-[110%] right-0 rounded-lg transition-opacity gap-6`}
    >
      <div className="md:text-lg lg:text-2xl self-start text-blue-400">
        <h3>دسته بندی ها</h3>
      </div>
      <ul className="py-4 self-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center w-full gap-10 max-h-[200px]  lg:max-h-[600px] overflow-y-auto overflow-x-hidden scroll-custom">
        {data?.categories?.map((category: any, index: number) => (
          <li key={category.id}>
            <div className="radio-wrapper-8">
              <label
                className="radio-wrapper-8 flex justify-center items-center"
                htmlFor={`example-${index}`}
              >
                <input
                  id={`example-${index}`}
                  type="radio"
                  name="radio-examples"
                  value={category.name}
                  onClick={(e) => handleChange(e)}
                />
                <span>{category.name}</span>
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
