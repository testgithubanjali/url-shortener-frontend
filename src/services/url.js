import api from "./api";

export const shortenURL = async (data) => {
  const response = await api.post("/shorten", data);
  return response.data;
};