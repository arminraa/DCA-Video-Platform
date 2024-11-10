"use client";

import { getAxios } from "@/utils/axios";
import { revalidatePath } from "next/cache";
import { useEffect, useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { redirect, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import axios from "@/lib/axios";

export default function VideoVote({ data }: any) {
  const router = useRouter();
  const backUrl = "http://localhost:3000";
  const pathname = usePathname();
  const [like, setLike] = useState<number>(parseInt(data.video.like));
  const [dislike, setDislike] = useState<number>(parseInt(data.video.dislike));
  const handleVote = async (vote: any) => {
    if (vote === "like") {
      setLike((await getAxios(`/like/${data.video.slug}`)) ? like + 1 : like);
    } else {
      setDislike(
        (await getAxios(`/dislike/${data.video.slug}`)) ? dislike + 1 : dislike
      );
    }
  };

  return (
    <div className="flex px-4 lg:px-0 lg:gap-12 gap-8 items-center w-full justify-end  py-10">
      <button className="flex gap-1 items-center flex-wrap">
        <FiDownload className="lg:text-blue text-3xl text-gray-400" />
        <a href={data?.video.video.original} download={data?.video.name}>
          <strong className="hidden lg:inline">دانلود</strong>
        </a>
      </button>
      <button className="flex gap-1 items-center flex-wrap">
        <FaShareAlt className="lg:text-blue text-3xl text-gray-400" />
        <strong className="hidden lg:inline cursor-pointer">
          اشتراک گذاری
        </strong>
      </button>
      <button
        onClick={() => handleVote("dislike")}
        className="flex gap-1 items-center flex-wrap"
      >
        <AiOutlineDislike className="lg:text-blue text-3xl text-gray-400" />
        <strong className="hidden lg:inline">دوست نداشتم</strong>
        <span>dislikes : {dislike}</span>
      </button>
      <button
        onClick={() => handleVote("like")}
        className="flex gap-1 items-center flex-wrap"
      >
        <AiOutlineLike className="lg:text-blue text-3xl text-gray-400" />
        <strong className="hidden lg:inline">دوست داشتم</strong>
        <span>likes : {like}</span>
      </button>
    </div>
  );
}
