"use server";

import { getAxios } from "@/utils/axios";

async function getData(endpoint: string) {
  return await getAxios(`${endpoint}`);
}

export { getData };
