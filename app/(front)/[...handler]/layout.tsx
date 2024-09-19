"use client";

import DataContext from "@/context/data/context";
import { CategoryObj } from "@/types";
import { ContextDataValue } from "@/types/data/contextTypes";
import { useContext } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = useContext<ContextDataValue<CategoryObj>>(DataContext);

  return (
    <div
      className={`container mx-auto max-w-8xl w-[95vw] flex  ${
        !data
          ? "justify-center items-center h-[50vh]"
          : "justify-between items-start"
      }`}
    >
      {children}
    </div>
  );
}
