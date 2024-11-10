import { CiClock1 } from "react-icons/ci";
import Picture from "../../Picture";
import Link from "next/link";
import RightSidebar from "../../layout/RightSidebar";
import { convertEnToFaDate, convertEnToFaTime } from "@/utils/helper";
import { getAxios } from "@/utils/axios";

export default async function Category({ data }: any) {
  const backUrlImage = process.env.NEXT_PUBLIC_BACKEND_URL_IMAGE;
  const menuItems = await getAxios("/menu");
  return (
    <>
      <RightSidebar menuItems={menuItems} />
      <div className="w-[100%] xl:w-[78%] mt-28 flex flex-col gap-2 items-center">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-stretch content-center">
          {data?.videos.map((video: any) => (
            <Link className="cursor-pointer" key={video.id} href={`/${video.slug}`}>
              <article className="rounded-lg flex flex-col justify-center items-start gap-4 h-[300px]">
                <Picture
                  src={`${backUrlImage}${video.poster}`}
                  alt="Image"
                  styles="object-cover rounded-lg w-full h-full"
                  rootStyle="w-full h-[200px]"
                />
                <div className="flex flex-col items-start justify-center h-[100px] overflow-y-auto">
                  <span className="overflow-y-auto h-auto max-h-[100px]">
                    {video.main_name}
                  </span>
                  <div className="flex flex-wrap justify-start items-center gap-1 text-gray-400">
                    <CiClock1 />
                    {video.updated_at ? (
                      <>
                        <span>تاریخ به روز رسانی :</span>
                        <span></span>
                        <span>
                          {convertEnToFaDate(video.updated_at)}{" "}
                          {convertEnToFaTime(video.updated_at)}
                        </span>
                      </>
                    ) : (
                      <>
                        <span>تاریخ انتشار :‌</span>
                        <span>
                          {convertEnToFaDate(video.created_at)}{" "}
                          {convertEnToFaTime(video.created_at)}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </section>
      </div>
    </>
  );
}
