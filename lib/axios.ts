import Axios, { AxiosInstance } from "axios";

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "X-Requested-With": "XmlHttpRequest",
  },
  withCredentials: false,
  withXSRFToken: false,
});

export default axios;

/*
<Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="/">
    MUI
  </Link>
  <Link
    underline="hover"
    color="inherit"
    href="/material-ui/getting-started/installation/"
  >
    Core
  </Link>
  <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography>
</Breadcrumbs>
*/
