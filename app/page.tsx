"use client";
import RightSidebar from "@/components/layout/RightSidebar";
import MainContentPage from "@/components/MainContentPage";
import { getData } from "@/actions/data";
import { useContext, useEffect } from "react";
import DataContext from "@/context/data/context";
import { ContextDataValue, DataActionTypes } from "@/types/data/contextTypes";
import { Data, DataObj } from "@/types";

export default function Home() {
  const { dataDispatch } = useContext<ContextDataValue<DataObj>>(DataContext);
  useEffect(() => {
    const recieveData = async () => {
      const fetchedData: Data = await getData("/home");
      dataDispatch!({ type: DataActionTypes.addData, payload: fetchedData });
    };
    recieveData();
  }, []);
  return (
    <>
      <RightSidebar />
      <MainContentPage />
    </>
  );
}
