import Picture from "@/components/Picture";
import {
  convertEnToFaDate,
  convertEnToFaTime,
} from "@/utils/helper/fetch/helper";
import { CiClock1 } from "react-icons/ci";

export default function RelationVideos({ productInfo }: any) {
  const backUrlImage = process.env.NEXT_PUBLIC_BACKEND_URL_IMAGE;
  return (
    <>
      <section className="self-stretch py-12 flex flex-col gap-6 lg:hidden">
        <strong className="text-lg text-gray-400 text-start">
          ویدیو های مرتبط
        </strong>
        {productInfo &&
          productInfo.videoRelation.map((video: any) => (
            <article key={video.id} className="lg:hidden h-[100px]">
              <div className="flex items-center gap-[2%] w-full relative h-full">
                <div className="w-[49%] h-full flex-shrink-0 shadow-2xl rounded-lg">
                  <Picture
                    src={`${backUrlImage}${video.poster}`}
                    styles="object-contain w-full h-full rounded-lg"
                    alt="Image"
                    rootStyle="w-full h-full"
                  />
                </div>

                <div className="flex flex-col items-start gap-2 text-sm flex-shrink-0 w-[49%] h-full">
                  <h3>{video.main_name}</h3>
                  <div className="flex flex-wrap justify-between items-center gap-1 text-gray-400 text-sm">
                    {video.updated_at ? (
                      <>
                        <span>بروزرسانی :‌</span>
                        <span></span>
                        <span>
                          {convertEnToFaDate(video.updated_at)}{" "}
                          {convertEnToFaTime(video.updated_at)}
                        </span>
                      </>
                    ) : (
                      <>
                        <span>انتشار : </span>
                        <span>
                          {convertEnToFaDate(video.created_at)}{" "}
                          {convertEnToFaTime(video.created_at)}
                        </span>
                      </>
                    )}{" "}
                  </div>
                </div>
              </div>
            </article>
          ))}
      </section>
      <section className="mt-20 hidden lg:block">
        <div className="text-start pr-4 flex flex-col gap-8">
          <strong className="text-gray-400 text-lg">ویدیو های مرتبط</strong>
          <section className="grid grid-cols-3 grid-rows-1 gap-4 justify-items-stretch content-center">
            {productInfo &&
              productInfo.videoRelation.map((video: any) => (
                <article
                  key={video.id}
                  className="rounded-lg flex flex-col justify-center items-start gap-4 h-[300px]"
                >
                  <div className="w-full h-[200px] flex-shrink-0 rounded-lg shadow-2xl backdrop-blur-l">
                    <Picture
                      src={`${backUrlImage}${video.poster}`}
                      alt="Image"
                      styles="object-contain rounded-lg w-full h-full px-2"
                      rootStyle="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-shrink-0 flex-col items-start justify-center h-[100px]">
                    <span className="overflow-y-auto h-auto max-h-[100px]">
                      {video.main_name}
                    </span>
                    <div className="flex justify-between items-center text-gray-400 text-sm">
                      <CiClock1 className="text-lg" />
                      {video.updated_at ? (
                        <>
                          <span>بروزرسانی</span>
                          <span>{convertEnToFaDate(video.updated_at)} </span>
                          <span>{convertEnToFaTime(video.updated_at)}</span>
                        </>
                      ) : (
                        <>
                          <span>انتشار</span>
                          <span>{convertEnToFaDate(video.created_at)} </span>
                          <span>{convertEnToFaTime(video.created_at)}</span>
                        </>
                      )}
                    </div>
                  </div>
                </article>
              ))}
          </section>
        </div>
      </section>
    </>
  );
}
