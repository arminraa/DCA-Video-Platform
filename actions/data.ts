"use server";
import { getAxios } from "@/utils/helper/axios";

async function getData(endpoint : string) {
  const fetchedData = await getAxios(`${endpoint}`);
  return fetchedData;
}

export { getData };
