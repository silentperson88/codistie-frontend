import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../apiService/apiService";

const getAllUser = createAsyncThunk("user/list", async (query) => {
  const res = await ApiService.get(`user?${query}`)
    .then((r) => r)
    .catch((error) => error.response);
  return res;
});
export const CreateUser = createAsyncThunk("user/create", async (body) => {
  const res = await ApiService.post(`user`, { ...body })
    .then((r) => r)
    .catch((err) => err.response);
  return res;
});

export default getAllUser;
