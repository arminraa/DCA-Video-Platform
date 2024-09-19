"use client";
import { getData } from "@/actions/data";
import Category from "@/components/product/categories/Category";
import Product from "@/components/product/categories/Product";
import Loading from "@/components/product/categories/Loading";
import DataContext from "@/context/data/context";
import { CategoryObj } from "@/types";
import { ContextDataValue, DataActionTypes } from "@/types/data/contextTypes";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import NotFound from "@/components/product/categories/NotFound";

export default function HandlerPage() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const { dataDispatch, data } =
    useContext<ContextDataValue<CategoryObj>>(DataContext);
  useEffect(() => {
    const recieveData = async () => {
      const fetchedData = await getData(pathname);
      setLoading(false);
      dataDispatch!({
        type: DataActionTypes.addCategories,
        payload: fetchedData,
      });
    };
    recieveData();
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (!data) {
    return <NotFound />;
  } else if (data?.type === "category") {
    return <Category />;
  } else if (data?.type === "video") {
    return <Product />;
  }
}
