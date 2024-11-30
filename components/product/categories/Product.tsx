// "use client";
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
import VideoVote from "./VideoVote";
import { Breadcrumbs } from "@mui/material";
import Link from "next/link";

export default function Product({ data }: any) {
  const backUrlImage = process.env.NEXT_PUBLIC_BACKEND_URL_IMAGE;
  // const [playerState, setPlayerState] = useState<any>(null);
  /*const shareData: ShareData = {
    title: productInfo?.video.name,
    text: productInfo?.video.main_name,
    url: "http://localhost:3001/electric-lock/898",
  };*/
  return (
    <section className="w-[100%] mt-14 lg:mt-28">
      {/* <div className="lg:self-start self-center pb-10 lg:absolute lg:top-16 lg:right-4">
        <Breadcrumbs
          aria-label="breadcrumb"
          // separator={<i className="bi bi-x"/>}
        >
          <Link color="inherit" href="/">
            خانه
          </Link>
          {data &&
            data.bread_crumb.map((item: any) => (
              <Link
                key={item.name}
                // underline="hover"
                color="inherit"
                href={`/${item.slug}`}
              >
                {item.name}
              </Link>
            ))}

        </Breadcrumbs>
      </div> */}
      <div className="flex justify-between items-start mt-12">
        <div className="lg:w-[70%] w-[100%] flex flex-col gap-4 lg:items-center items-start">
          <div className="w-full rounded-lg">
            <video
              className="w-full min-h-[200px] max-h-[600px] object-cover rounded-lg"
              controls
              poster={`${backUrlImage}${data?.video.poster}`}
              preload="metadata"
              src={data?.video.video.original}
            />
          </div>
          <VideoVote data={data} />
          <article className="bg-gray w-full rounded-lg flex flex-col gap-6 items-start py-8 px-6">
            <h2 className="text-gray-400 text-xl">{data?.video.main_name}</h2>
            <Paragraph productInfo={data} />
          </article>
          {data.video.products.length > 0 &&
            data.video.products.map((product: any) => (
              <article
                key={product.id}
                className="bg-gray w-full rounded-lg flex justify-between items-end py-6 px-4"
              >
                <div className="flex items-start gap-4">
                  <Picture
                    src={`${backUrlImage}${product.image}`}
                    alt={product.image_alt}
                    styles="w-[130px] h-[130px] object-contain"
                    setVideoTime={false}
                  />
                  <h3 className="pt-6">{product.name}</h3>
                </div>
                <button className="bg-blue-400 text-white py-1 px-6 rounded-lg mb-4 text-sm lg:text-md">
                  مشاهده و خرید
                </button>
              </article>
            ))}

          <div className="lg:hidden">
            <RelationVideos productInfo={data} />
          </div>

          {/* <form className="w-full relative">
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
          </button> */}
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
