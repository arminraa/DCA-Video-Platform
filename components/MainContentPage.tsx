"use client";
import LeftSidebar from "./layout/LeftSidebar";
import Picture from "./Picture";
import { useContext } from "react";
import DataContext from "@/context/data/context";
import Skeleton from "./Skeleton";
import { ContextDataValue } from "@/types/data/contextTypes";
import { DataObj } from "@/types";
export default function ContentPage() {
  const backUrlImage = process.env.NEXT_PUBLIC_BACKEND_URL_IMAGE;
  const { data } = useContext<ContextDataValue<DataObj>>(DataContext);
  return (
    <section className="w-[95%] xl:w-[75%] md:mt-28 mt-16 flex flex-col justify-between mx-auto">
      <div className="relative text-blue">
        <h2 className="text-lg lg:text-xl py-4 px-0 w-[50%] sm:w-[50%] md:w-[30%]  lg:w-[20%]">
          <span className="whitespace-nowrap">پر بازديد ترين </span>
          ويديوها
        </h2>
        <div className="absolute bg-gray-400 top-[50%] -translate-y-[50%] left-0 w-[50%] sm:w-[50%] md:w-[70%] lg:w-[80%] h-[2px] rounded-lg"></div>
      </div>
      <section className="w-[100%] overflow-y-hidden lg:overflow-visible overflow-x-auto flex lg:items-center lg:justify-around gap-2 lg:gap-0 scroll-custom mt-6 pb-10">
        {data ? (
          data.viewed.map((post) => (
            <article
              key={post.id}
              className="flex flex-col gap-4 items-center flex-shrink-0 lg:h-auto relative w-[300px] lg:w-auto shadow-xl py-8 px-4 lg:py-0 lg:px-0 lg:shadow-none rounded-lg"
            >
              <Picture
                src={`${backUrlImage}${post.poster}`}
                alt="Image"
                styles="rounded-lg max-h-[150px] object-contain lg:object-cover w-full"
                rootStyle="w-full"
              />
              <p>{post.main_name}</p>
            </article>
          ))
        ) : (
          <>
            <article className="flex flex-col gap-4 items-center lg:w-[33.333333%] w-[100%]">
              <Skeleton styles="bg-gray w-full h-[200px] rounded-lg" />
              <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
              <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
            </article>
            <article className="lg:flex flex-col gap-4 items-center w-[33.333333%] hidden">
              <Skeleton styles="bg-gray w-full h-[200px] rounded-lg" />
              <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
              <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
            </article>
            <article className="lg:flex flex-col gap-4 items-center w-[33.333333%] hidden">
              <Skeleton styles="bg-gray w-full h-[200px] rounded-lg" />
              <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
              <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
            </article>
          </>
        )}
      </section>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:mt-4 mt-6">
        <section className="lg:w-[65%] w-[100%] flex flex-col gap-4 order-2 lg:order-none">
          {data ? (
            data.boxs.map((post) => (
              <article key={post.id} className="w-full">
                <div className="relative text-blue">
                  <h2 className="text-lg lg:text-xl py-4 px-0 w-[50%] sm:w-[50%] md:w-[30%]  lg:w-[30%] whitespace-nowrap">
                    {post.title}
                  </h2>
                  <div className="absolute bg-gray-400 top-[50%] -translate-y-[50%] left-0 w-[50%] sm:w-[50%] md:w-[70%] lg:w-[70%] h-[2px] rounded-lg"></div>
                </div>
                <div className="flex flex-col gap-4 items-start">
                  <div className="w-full h-[250px] rounded-lg">
                    <Picture
                      src={`${backUrlImage}${post.image}`}
                      alt="Image"
                      styles="object-cover md:object-cover rounded-lg h-full w-full"
                      rootStyle="w-full"
                    />
                  </div>
                  <p className="hidden lg:inline">{post.description}</p>
                </div>
              </article>
            ))
          ) : (
            <>
              <article className="w-full flex flex-col gap-4 items-center">
                <Skeleton styles="bg-gray w-full h-[200px] rounded-lg" />
                <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
              </article>
              <article className="w-full flex flex-col gap-4 items-center">
                <Skeleton styles="bg-gray w-full h-[200px] rounded-lg" />
                <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
              </article>
              <article className="w-full flex flex-col gap-4 items-center">
                <Skeleton styles="bg-gray w-full h-[200px] rounded-lg" />
                <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
              </article>
              <article className="w-full flex flex-col gap-4 items-center">
                <Skeleton styles="bg-gray w-full h-[200px] rounded-lg" />
                <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
              </article>
            </>
          )}
        </section>
        <section className="lg:w-[30%] w-[100%] order-1 lg:order-none">
          <div className="relative text-blue">
            <h2 className="text-lg lg:text-xl py-4 px-0 w-[50%] sm:w-[50%] md:w-[30%]  lg:w-[50%]">
              <span className="whitespace-nowrap">جدیدترین ویدیوها</span>
            </h2>
            <div className="absolute bg-gray-400 top-[50%] -translate-y-[50%] left-0 w-[50%] sm:w-[50%] md:w-[70%] lg:w-[49%] h-[2px] rounded-lg"></div>
          </div>
          <LeftSidebar />
        </section>
      </div>
    </section>
  );
}
