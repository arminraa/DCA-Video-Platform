import RightSidebar from "@/components/layout/RightSidebar";
import MainContentPage from "@/components/MainContentPage";
import { getAxios } from "@/utils/axios";
export default async function Home() {
  const fetchedData = await getAxios("/home");
  return (
    <>
      <RightSidebar data={fetchedData} />
      <MainContentPage data={fetchedData} />
    </>
  );
}
