"use client";
export default function Error({ error }: any) {
  return <div>{error.message}</div>;
}
