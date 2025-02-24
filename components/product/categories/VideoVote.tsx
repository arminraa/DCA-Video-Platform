"use client";

import { getAxios } from "@/utils/axios";
import { revalidatePath } from "next/cache";
import { useEffect, useState } from "react";
import { AiFillYoutube, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { redirect, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import axios from "@/lib/axios";
import { Flip, toast } from "react-toastify";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";

export default function VideoVote({ data }: any) {
  const router = useRouter();
  const backUrl = "http://localhost:3000";
  const pathname = usePathname();
  const [like, setLike] = useState<number>(parseInt(data.video.like));
  const [dislike, setDislike] = useState<number>(parseInt(data.video.dislike));
  const handleVote = async (vote: any) => {
    if (vote === "like") {
      const isLiked: boolean = await getAxios(`/like/${data.video.slug}`);
      setLike(isLiked ? like + 1 : like);
      if (isLiked) {
        toast.success("با موفقیت لایک شد", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Flip,
        });
      }
    } else {
      const isDisLiked: boolean = await getAxios(`/dislike/${data.video.slug}`);
      setDislike(isDisLiked ? dislike + 1 : dislike);
      if (isDisLiked) {
        toast.success("با موفقیت دیسلایک شد", {
          position: "top-right",
          // autoClose: 3000,
          hideProgressBar: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Flip,
        });
      }
    }
  };
  const [showShare, setShowShare] = useState(false);

  return (
    <div className="flex px-4 lg:px-0 lg:gap-12 gap-8 items-center w-full justify-end  py-10">
      <button className="flex gap-1 items-center flex-wrap">
        <FiDownload className="lg:text-blue text-3xl text-gray-400" />
        <a href={data?.video.video.original} download={data?.video.name}>
          <strong className="hidden lg:inline">دانلود</strong>
        </a>
      </button>
      <button
        className="flex gap-1 items-center flex-wrap relative"
        onMouseEnter={() => setShowShare(true)}
        onMouseLeave={() => setShowShare(false)}
      >
        <FaShareAlt className="lg:text-blue text-3xl text-gray-400" />
        <strong className="hidden lg:inline cursor-pointer">
          اشتراک گذاری
        </strong>
        <div
          className={`lg:w-full w-24 px-2 py-6 bg-blue-400 ${
            showShare ? "opacity-100" : "opacity-0"
          } absolute transition-opacity top-[35px] rounded-lg`}
        >
          <ul className="flex lg:gap-2 gap-1 justify-center items-center text-white">
            <li className="cursor-pointer">
              <RiInstagramFill className="text-2xl" />
            </li>
            <li className="cursor-pointer">
              <AiFillYoutube className="text-2xl" />
            </li>
            <li className="cursor-pointer">
              <FaTwitter className="text-2xl" />
            </li>
          </ul>
        </div>
      </button>
      <button
        onClick={() => handleVote("dislike")}
        className="flex gap-1 items-center flex-wrap"
      >
        <div className="flex justify-center items-center gap-2">
          <AiOutlineDislike className="lg:text-blue text-3xl text-gray-400" />
          <strong className="hidden lg:inline">دوست نداشتم</strong>
          <strong>{dislike}</strong>
        </div>
      </button>
      <button
        onClick={() => handleVote("like")}
        className="flex gap-1 items-center flex-wrap"
      >
        <div className="flex justify-center items-center gap-2">
          <AiOutlineLike className="lg:text-blue text-3xl text-gray-400" />
          <strong className="hidden lg:inline">دوست داشتم</strong>
          <strong>{like}</strong>
        </div>
      </button>
    </div>
  );
}
