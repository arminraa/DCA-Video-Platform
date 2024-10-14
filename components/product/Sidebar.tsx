"use client";
import Picture from "../Picture";


export default function ProductSidebar({data} : any) {
  const backUrlImage = process.env.NEXT_PUBLIC_BACKEND_URL_IMAGE;
  return (
    <aside className="h-auto bg-gray w-[100%] rounded-2xl">
      <div className="container mx-auto max-w-lg w-[95%] px-6 pt-6">
        <section className="flex flex-col gap-4 items-center">
          {data &&
            // @ts-ignore
            data.videoNext.map((video: any) => (
              <article key={video.id} className="flex flex-col items-center gap-4 relative py-10">
                <Picture
                  src={`${backUrlImage}${video.poster}`}
                  alt="Image"
                  styles="rounded-lg object-cover w-full h-full"
                />
                <span>{video.main_name}</span>
                <div className="absolute bg-gray-400 bottom-6 left-0 w-[98%] h-[1px] rounded-lg"></div>
              </article>
            ))}
        </section>
      </div>
    </aside>
  );
}
