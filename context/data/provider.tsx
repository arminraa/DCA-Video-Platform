"use client";
import { useReducer } from "react";
import DataContext from "./context";
import { dataReducer, initialDataState } from "./reducer";
export default function DataProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [dataState, dataDispatch] = useReducer(dataReducer, initialDataState);
  return (
    <DataContext.Provider value={{ ...dataState, dataDispatch }}>
      {children}
    </DataContext.Provider>
  );
}
