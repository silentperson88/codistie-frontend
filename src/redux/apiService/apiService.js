/* eslint-disable  */

import axios from "axios";

const BASE_URL = "http://localhost:4000/";

// Axios API Service
const ReynardBackendApiService = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default ReynardBackendApiService;
