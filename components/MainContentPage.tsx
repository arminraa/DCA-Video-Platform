import LeftSidebar from "./layout/LeftSidebar";
import Picture from "./Picture";
import Skeleton from "./Skeleton";
import Link from "next/link";

export default function MainContentPage({ data }: any) {
  const backUrlImage = process.env.NEXT_PUBLIC_BACKEND_URL_IMAGE;
  return (
    <section className="w-[95%] xl:w-[75%] md:mt-28 mt-16 flex flex-col justify-between mx-auto">
      <div className="relative text-blue">
        <h2 className="text-lg lg:text-xl py-4 px-0 w-[60%] sm:w-[50%] md:w-[30%]  lg:w-[20%]">
          <span className="whitespace-nowrap">پر بازديد ترين </span>
          ويديوها
        </h2>
        <div className="absolute bg-gray-400 top-[50%] -translate-y-[50%] left-0 w-[35%] sm:w-[50%] md:w-[70%] lg:w-[80%] h-[2px] rounded-lg"></div>
      </div>
      <section className="w-[100%] overflow-y-hidden lg:overflow-visible overflow-x-auto flex lg:items-center lg:justify-around gap-2 lg:gap-0 scroll-custom mt-6 pb-10">
        {data ? (
          data?.viewed?.map((post: any) => (
            <Link key={post.id} href={`/${post.category.slug}/${post.slug}`}>
              <article className="flex flex-col gap-4 items-center flex-shrink-0 h-[250px] lg:h-[210px] relative w-[300px] lg:w-auto shadow-xl py-8 px-4 lg:py-0 lg:px-0 lg:shadow-none rounded-lg">
                <Picture
                  src={`${backUrlImage}${post.poster}`}
                  alt="Image"
                  styles="rounded-lg max-h-[150px] object-contain lg:object-cover w-full"
                  rootStyle="w-full"
                />
                <p>{post.main_name}</p>
              </article>
            </Link>
          ))
        ) : (
          <>
            <article className="flex flex-col gap-4 items-center lg:w-[33.333333%] w-[100%]">
              <Skeleton styles="bg-gray w-full h-[200px] rounded-lg" />
              <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
              <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
            </article>
            <article className="lg:flex flex-col mr-4 gap-4 items-center w-[33.333333%] hidden">
              <Skeleton styles="bg-gray w-full h-[200px] rounded-lg" />
              <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
              <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
            </article>
            <article className="lg:flex flex-col mr-4 gap-4 items-center w-[33.333333%] hidden">
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
            data.boxs.map((post: any) => (
              <Link
                key={post.id}
                href={`/${post.link.replace("https://vidbeen.ir/", "")}`}
              >
                <article className="w-full">
                  <div className="relative text-blue">
                    <h2 className="text-lg lg:text-xl py-4 px-0 w-[50%] sm:w-[50%] md:w-[30%]  lg:w-[30%] whitespace-nowrap">
                      {post.title}
                    </h2>
                    <div className="absolute bg-gray-400 top-[50%] -translate-y-[50%] left-0 w-[50%] sm:w-[50%] md:w-[70%] lg:w-[70%] h-[2px] rounded-lg"></div>
                  </div>
                  <div className="flex flex-col gap-4 items-start">
                    <div className="w-full rounded-lg">
                      <Picture
                        src={`${backUrlImage}${post.image}`}
                        alt="Image"
                        styles="object-cover rounded-lg min-h-[150px] max-h-[250px] w-full"
                        rootStyle="w-full"
                      />
                    </div>
                    <p className="hidden lg:inline">{post.description}</p>
                  </div>
                </article>
              </Link>
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
          <div className="relative text-blue">
            <h2 className="text-lg lg:text-xl py-4 px-0 w-[25%] sm:w-[50%] md:w-[30%]  lg:w-[20%]">
              <span className="whitespace-nowrap">آموزشی</span>
            </h2>
            <div className="absolute bg-gray-400 top-[50%] -translate-y-[50%] left-0 w-[70%] sm:w-[50%] md:w-[70%] lg:w-[80%] h-[2px] rounded-lg"></div>
          </div>
          <section className="w-[100%] overflow-y-hidden lg:overflow-visible overflow-x-auto flex lg:items-center lg:justify-around gap-2 lg:gap-6 scroll-custom mt-6 pb-10 lg:pb-0">
            {data &&
              data.tutorialVideo.map((post: any) => (
                <Link
                  key={post.id}
                  href={`/${post.category.slug}/${post.slug}`}
                >
                  <article className="flex flex-col gap-4 items-center flex-shrink-0 h-[300px] lg:h-[210px] relative w-[300px] lg:w-[185px] xl:w-auto shadow-xl py-8 px-4 lg:py-0 lg:px-0 lg:shadow-none rounded-lg">
                    <Picture
                      src={`${backUrlImage}${post.poster}`}
                      alt="Image"
                      styles="rounded-lg h-[200px] object-contain w-full"
                      rootStyle="w-full lg:shadow-lg lg:rounded-lg"
                    />
                    <p>{post.main_name}</p>
                  </article>
                </Link>
              ))}
          </section>
        </section>
        <section className="lg:w-[30%] w-[100%] order-1 lg:order-none">
          <div className="relative text-blue">
            <h2 className="text-lg lg:text-xl py-4 px-0 w-[50%] sm:w-[50%] md:w-[30%]  lg:w-[50%]">
              <span className="whitespace-nowrap">جدیدترین ویدیوها</span>
            </h2>
            <div className="absolute bg-gray-400 top-[50%] -translate-y-[50%] left-0 w-[50%] sm:w-[50%] md:w-[70%] lg:w-[49%] h-[2px] rounded-lg"></div>
          </div>
          <LeftSidebar data={data} />
        </section>
      </div>
    </section>
  );
}
