import api from "./api";

export const shortenURL = async (data) => {
  const response = await api.post("/shorten", data);
  return response.data;
};

export const getURLs = async () => {
  const response = await api.get("/urls");
  return response.data;
};

export const deleteURL = async (id) => {
  const response = await api.delete(`/urls/${id}`);
  return response.data;
};