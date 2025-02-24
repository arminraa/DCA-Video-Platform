import RightSidebar from "@/components/layout/RightSidebar";
import MainContentPage from "@/components/MainContentPage";
import { getAxios } from "@/utils/axios";
export default async function Home() {
  const fetchedData = await getAxios("/home");
  const menuItems = await getAxios("/menu");
  return (
    <>
      <RightSidebar menuItems={menuItems} />
      <MainContentPage data={fetchedData} />
    </>
  );
}
