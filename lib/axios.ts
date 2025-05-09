import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "X-Requested-With": "XmlHttpRequest",
  },
  withCredentials: false,
  withXSRFToken: false,
});

export default axios;
