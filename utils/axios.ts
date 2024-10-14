import axios from "@/lib/axios";

const backUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

async function getAxios(url: string) {
  try {
    const res = await axios.get(`${backUrl}${url}`);
    return await res.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export { getAxios };
