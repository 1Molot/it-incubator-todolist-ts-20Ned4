import axios from "axios";

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  withCredentials: true,
  headers: {
    // "API-KEY": "1cdd9f77-c60e-4af5-b194-659e4ebd5d41",
    "API-KEY": "5a156657-6985-42ea-9262-b6e3873afb30" //moi
  },
});
