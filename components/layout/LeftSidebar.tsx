import Picture from "../Picture";

import Link from "next/link";

export default function LeftSidebar({data} : any) {
  const backUrlImage = process.env.NEXT_PUBLIC_BACKEND_URL_IMAGE;
  return (
    <aside className="h-auto lg:bg-gray bg-white w-[100%] rounded-2xl lg:py-8">
      <div className="lg:container lg:mx-auto lg:max-w-lg lg:w-[95%] w-[100%] lg:px-6 lg:pt-6">
        <section className="flex lg:flex-col  w-full lg:w-[95%] lg:h-auto overflow-y-hidden lg:overflow-visible overflow-x-auto items-center gap-2 scroll-custom py-10 lg:py-0 lg:gap-16">
          {data ? (
            data?.newVideo?.map((post : any) => (
              <Link href={`/${post.category.slug}/${post.slug}`} key={post.id}>
                <article className="flex flex-col items-center gap-4 flex-shrink-0 h-full lg:h-auto w-[300px] lg:w-auto shadow-xl py-8 px-4 lg:py-0 lg:px-0 lg:shadow-none rounded-lg">
                  <Picture
                    src={`${backUrlImage}${post.poster}`}
                    styles="object-contain lg:object-cover rounded-lg max-h-[150px] w-full"
                    alt="Image"
                    rootStyle="w-full"
                  />
                  <p>{post.title}</p>
                  <div className=" bg-gray-400 w-full h-[1px] rounded-lg hidden lg:block" />
                </article>
              </Link>
            ))
          ) : (
            <div className="h-[200px] flex justify-center items-center w-full">
              <div className="loader"></div>
            </div>
          )}
        </section>
      </div>
    </aside>
  );
}
