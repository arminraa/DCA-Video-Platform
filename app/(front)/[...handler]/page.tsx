"use client";
import { getData } from "@/actions/data";
import Category from "@/components/product/categories/Category";
import NotFound from "@/components/product/categories/NotFound";
import Product from "@/components/product/categories/Product";
import Loading from "@/components/product/categories/Loading";
import DataContext from "@/context/data/context";
import { CategoryObj } from "@/types";
import { ContextDataValue, DataActionTypes } from "@/types/data/contextTypes";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";

export default function HandlerPage() {
  const pathname = usePathname();
  const { dataDispatch, data } =
    useContext<ContextDataValue<CategoryObj>>(DataContext);
  useEffect(() => {
    const recieveData = async () => {
      const fetchedData = await getData(pathname);
      dataDispatch!({
        type: DataActionTypes.addCategories,
        payload: fetchedData,
      });
    };
    recieveData();
  }, []);
  if (!data) {
    return <Loading />;
  }
  if (data?.type === "category") {
    return <Category />;
  }
  if (data?.type === "video") {
    return <Product />;
  } else {
    return <NotFound />;
  }
}
