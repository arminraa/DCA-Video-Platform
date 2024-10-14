"use client";
import { AppProgressBar } from "next-nprogress-bar";

export default function NextNprogress({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <AppProgressBar
        height="2px"
        color="white"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
