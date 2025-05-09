import Picture from "@/components/Picture";
import { convertEnToFaDate, convertEnToFaTime } from "@/utils/helper";
import Link from "next/link";
import { CiClock1 } from "react-icons/ci";

export default function RelationVideos({
  productInfo,
}: Readonly<{
  productInfo: any;
}>) {
  const backUrlImage = process.env.NEXT_PUBLIC_BACKEND_URL_IMAGE;
  return (
    <section className="mt-20">
      <div className="text-start lg:pr-4 flex flex-col gap-8">
        <strong className="text-gray-400 text-lg">ویدیو های مرتبط</strong>
        <section className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-y-4 lg:gap-x-4 lg:gap-y-0 justify-items-stretch content-center py-10 lg:py-0">
          {productInfo &&
            productInfo.videoRelation.map((video: any) => (
              <Link href={`/${video.slug}`} key={video.id}>
                <article className="rounded-lg flex justify-between lg:flex-col lg:justify-center lg:items-start gap-4 lg:h-[300px] h-[100px] w-full">
                  <div className="lg:w-full w-[49%] lg:h-[200px] h-full flex-shrink-0 rounded-lg shadow-2xl">
                    <Picture
                      src={`${backUrlImage}${video.poster}`}
                      alt="Image"
                      styles="object-contain rounded-lg w-full h-full px-2"
                      rootStyle="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-shrink-0 flex-col items-start justify-center lg:h-[100px] h-full w-[49%] lg:w-full">
                    <span className="overflow-y-auto h-auto max-h-[100px]">
                      {video.main_name}
                    </span>
                    <div className="flex justify-between items-center text-gray-400 text-xs md:text-sm">
                      <CiClock1 className="lg:text-lg text-md" />
                      {video.updated_at ? (
                        <>
                          <span>بروزرسانی</span>
                          <span>{convertEnToFaDate(video.updated_at)} </span>
                        </>
                      ) : (
                        <>
                          <span>انتشار</span>
                          <span>{convertEnToFaDate(video.created_at)} </span>
                        </>
                      )}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
        </section>
      </div>
    </section>
  );
}
