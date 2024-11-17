import Category from "@/components/product/categories/Category";
import Product from "@/components/product/categories/Product";
import Loading from "@/components/product/categories/Loading";
import NotFound from "@/components/product/categories/NotFound";
import { getAxios } from "@/utils/axios";

export default async function HandlerPage({ params }: any) {
  params.handler.shift(0);
  const data = await getAxios(`/${params.handler.join().replaceAll(",", "/")}`);
  if (!data) {
    return <Loading />;
  } else {
    if (data?.type === "category") {
      return <Category data={data} activePage={params.handler.length  > 1 ? params.handler.join("/") : null}/>;
    } else if (data?.type === "video") {
      return <Product data={data} />;
    } else {
      return <NotFound />;
    }
  }
}
