import API from "./api";

export const loginUser = async (credentials) => {
  const response = await API.post("/auth/login", credentials);
  return response.data;
};

export const registerUser = async (user) => {
  const response = await API.post("/auth/register", user);
  return response.data;
};