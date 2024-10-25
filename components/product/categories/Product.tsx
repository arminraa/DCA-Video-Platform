"use client";
import { FiDownload } from "react-icons/fi";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { LuReply } from "react-icons/lu";
import ProductSidebar from "@/components/product/Sidebar";
import { FaShareAlt } from "react-icons/fa";
import Picture from "@/components/Picture";
import RelationVideos from "./RelationVideos";
import Paragraph from "../Paragraph";
import Plyr from "plyr";
import { useEffect, useState } from "react";

export default function Product({ data }: any) {
  const backUrlImage = process.env.NEXT_PUBLIC_BACKEND_URL_IMAGE;
  const [playerState, setPlayerState] = useState<any>(null);
  /*const shareData: ShareData = {
    title: productInfo?.video.name,
    text: productInfo?.video.main_name,
    url: "http://localhost:3001/electric-lock/898",
  };*/
  useEffect(() => {
    const player = new Plyr("#player");
    setPlayerState(player);
  }, []);

  return (
    <section className="w-[100%] mt-14 lg:mt-28">
      <div className="flex justify-between items-start mt-12">
        <div className="lg:w-[70%] w-[100%] flex flex-col gap-4 lg:items-center items-start">
          <div className="w-full rounded-lg">
            <video
              className="w-full h-[200px] object-cover"
              id="player"
              playsInline
              controls
              data-poster={`${backUrlImage}${data?.video.poster}`}
              preload="metadata"
              onClick={() => playerState.pause()}
            >
              <source className="h-full" src={data?.video.video.original} type="video/mp4" />
            </video>
          </div>
          <ul className="flex px-4 lg:px-0 lg:gap-12 gap-8 items-center w-full justify-end  py-10">
            <li className="flex gap-1 items-center flex-wrap">
              <FiDownload className="lg:text-blue text-3xl text-gray-400" />
              <a href={data?.video.video.original} download={data?.video.name}>
                <strong className="hidden lg:inline">دانلود</strong>
              </a>
            </li>
            <li className="flex gap-1 items-center flex-wrap">
              <FaShareAlt className="lg:text-blue text-3xl text-gray-400" />
              <strong className="hidden lg:inline cursor-pointer">
                اشتراک گذاری
              </strong>
            </li>
            <li className="flex gap-1 items-center flex-wrap">
              <AiOutlineDislike className="lg:text-blue text-3xl text-gray-400" />
              <strong className="hidden lg:inline">دوست نداشتم</strong>
            </li>
            <li className="flex gap-1 items-center flex-wrap">
              <AiOutlineLike className="lg:text-blue text-3xl text-gray-400" />
              <strong className="hidden lg:inline">دوست داشتم</strong>
            </li>
          </ul>
          <article className="bg-gray w-full rounded-lg flex flex-col gap-6 items-start py-8 px-6">
            <h2 className="text-gray-400 text-xl">{data?.video.main_name}</h2>
            <Paragraph productInfo={data} />
          </article>
          <article className="bg-gray w-full rounded-lg flex justify-between items-end py-6 px-4">
            <div className="flex items-start gap-4">
              <Picture
                src="/images/img-9.png"
                alt="Image"
                styles="w-[130px] h-[130px] object-contain"
                setVideoTime={false}
              />
              <h3 className="pt-6">آیفون تصویری تابا مدل TVD-5-43</h3>
            </div>
            <button className="bg-blue-400 text-white py-1 px-6 rounded-lg mb-4 text-sm lg:text-md">
              مشاهده و خرید
            </button>
          </article>
          <div className="lg:hidden">
            <RelationVideos productInfo={data} />
          </div>

          <form className="w-full relative">
            <input
              className="bg-gray w-full py-4 px-12 outline-none rounded-md"
              type="text"
              placeholder="دیدگاه خود را وارد کنید . . ."
            />
            <FaUserCircle className="absolute top-[50%] -translate-y-[50%] text-gray-400 text-2xl right-4" />
            <button className="absolute top-[50%] -translate-y-[50%] text-gray-400 text-2xl left-4">
              <RiSendPlaneFill />
            </button>
          </form>
          <article className="w-full bg-gray flex justify-between items-center px-4 py-8">
            <div className="flex gap-4 items-center">
              <Picture
                src="/images/image-girl.jpg"
                alt="Image"
                styles="w-[70px] h-[70px] object-cover rounded-full"
                setVideoTime={false}
              />

              <div className="flex flex-col gap-1 items-start pt-4 text-sm lg:text-md">
                <h4>فرانک افتخاری</h4>
                <p className="text-gray-400 text-sm lg:text-md">
                  سلام ، مطلب خیلی مفید و عالی بود
                </p>
              </div>
            </div>
            <ul className="flex gap-2 items-center">
              <li className="flex gap-2 items-center">
                <strong className="text-lg text-gray-400 hidden lg:inline">
                  پاسخ
                </strong>
                <LuReply className="text-blue-400 text-2xl" />
              </li>
              <li className="flex gap-2 items-center">
                <strong className="text-lg text-gray-400 hidden lg:inline">
                  2
                </strong>
                <AiOutlineDislike className="text-blue-400 text-2xl" />
              </li>
              <li className="flex gap-2 items-center">
                <strong className="text-lg text-gray-400 hidden lg:inline">
                  10
                </strong>
                <AiOutlineLike className="text-blue-400 text-2xl" />
              </li>
            </ul>
          </article>
          <article className="w-full bg-gray flex justify-between items-center px-4 py-8">
            <div className="flex gap-4 items-center">
              <Picture
                src="/images/image-boy.jpg"
                alt="Image"
                styles="w-[70px] h-[70px] object-cover rounded-full"
                setVideoTime={false}
              />
              <div className="flex flex-col gap-1 items-start pt-4 text-sm lg:text-md">
                <h4>علی بشارتی</h4>
                <p className="text-gray-400 text-sm lg:text-md">
                  چطور میتونم این محصول رو خریداری کنم؟
                </p>
              </div>
            </div>
            <ul className="flex gap-2 items-center">
              <li className="flex gap-2 items-center">
                <strong className="text-lg text-gray-400 hidden lg:inline">
                  پاسخ
                </strong>
                <LuReply className="text-blue-400 text-2xl" />
              </li>
              <li className="flex gap-2 items-center">
                <strong className="text-lg text-gray-400 hidden lg:inline">
                  2
                </strong>
                <AiOutlineDislike className="text-blue-400 text-2xl" />
              </li>
              <li className="flex gap-2 items-center">
                <strong className="text-lg text-gray-400 hidden lg:inline">
                  10
                </strong>
                <AiOutlineLike className="text-blue-400 text-2xl" />
              </li>
            </ul>
          </article>
          <button className="text-blue text-lg">
            <strong>+ بیشتر ببینید</strong>
          </button>
          <div className="hidden lg:block">
            <RelationVideos productInfo={data} />
          </div>
        </div>
        <div className="w-[25%] hidden lg:block sticky top-1">
          <ProductSidebar data={data} />
        </div>
      </div>
    </section>
  );
}
