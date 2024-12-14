import { CiClock1 } from "react-icons/ci";
import Picture from "../../Picture";
import Link from "next/link";
import RightSidebar from "../../layout/RightSidebar";
import { convertEnToFaDate, convertEnToFaTime } from "@/utils/helper";
import { getAxios } from "@/utils/axios";
import { Breadcrumbs, Typography } from "@mui/material";

export default async function Category({
  data,
  activePage,
}: Readonly<{
  data: {
    videos: any;
    bread_crumb: any;
  };
  activePage: string;
}>) {
  const backUrlImage = process.env.NEXT_PUBLIC_BACKEND_URL_IMAGE;
  const menuItems = await getAxios("/menu");
  return (
    <>
      <RightSidebar menuItems={menuItems} />
      <div className="w-[100%] xl:w-[78%] mt-28 flex flex-col gap-2 items-center">
        <div style={{fontFamily : "dana"}} className="lg:self-start self-center pb-10 lg:absolute lg:top-16 lg:right-4">
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
            {activePage && (
              <Link
                // underline="hover"
                color="inherit"
                href={`/${activePage}`}
              >
                <Typography sx={{ color: "text.primary" }}>
                  {activePage}
                </Typography>
              </Link>
            )}
          </Breadcrumbs>
        </div>
        {/* <p>{JSON.stringify(data.bread_crumb)}</p> */}
        {/* <Typography sx={{ color: "text.primary" }}>Core</Typography> */}

        <section className="z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-stretch content-center">
          {data &&
            data.videos.map((video: any) => (
              <Link
                className="cursor-pointer"
                key={video.id}
                href={`/${video.slug}`}
              >
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
                          <span>{convertEnToFaDate(video.updated_at)}</span>
                        </>
                      ) : (
                        <>
                          <span>تاریخ انتشار :‌</span>
                          <span>{convertEnToFaDate(video.created_at)}</span>
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
