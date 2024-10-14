import Skeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <>
      <aside className="hidden xl:block h-auto bg-gray mt-28 w-[20%] rounded-2xl sticky top-1">
        <div className="container mx-auto max-w-lg w-[100%] px-6 py-1 pl-2">
          <div className="h-[200px] flex justify-center items-center">
            <div className="loader"></div>
          </div>
        </div>
      </aside>
      <div className="w-[100%] xl:w-[78%] mt-28 mr-2">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-stretch content-center">
          <article className="flex flex-col gap-4 items-center">
            <Skeleton styles="bg-gray w-full h-[200px] rounded-lg" />
            <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
            <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
          </article>
          <article className="flex flex-col gap-4 items-center">
            <Skeleton styles="bg-gray w-full h-[200px] rounded-lg" />
            <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
            <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
          </article>
          <article className="flex flex-col gap-4 items-center">
            <Skeleton styles="bg-gray w-full h-[200px] rounded-lg" />
            <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
            <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
          </article>
          <article className="flex flex-col gap-4 items-center">
            <Skeleton styles="bg-gray w-full h-[200px] rounded-lg" />
            <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
            <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
          </article>
          <article className="flex flex-col gap-4 items-center">
            <Skeleton styles="bg-gray w-full h-[200px] rounded-lg" />
            <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
            <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
          </article>
          <article className="flex flex-col gap-4 items-center">
            <Skeleton styles="bg-gray w-full h-[200px] rounded-lg" />
            <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
            <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
          </article>
          <article className="flex flex-col gap-4 items-center">
            <Skeleton styles="bg-gray w-full h-[200px] rounded-lg" />
            <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
            <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
          </article>
          <article className="flex flex-col gap-4 items-center">
            <Skeleton styles="bg-gray w-full h-[200px] rounded-lg" />
            <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
            <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
          </article>
          <article className="flex flex-col gap-4 items-center">
            <Skeleton styles="bg-gray w-full h-[200px] rounded-lg" />
            <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
            <Skeleton styles="bg-gray w-full h-[10px] rounded-lg" />
          </article>
        </section>
      </div>
    </>
  );
}
