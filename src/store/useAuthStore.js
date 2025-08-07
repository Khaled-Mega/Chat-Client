import { create } from "zustand";

import { axiosInstance } from "../lib/axios.js";



export const useAuthStore = create((set) => ({
  authUser: null,
  isCheckingAuth: true,
  isSignedIn: false,
  isLoggedIn: false,
  isUpdating: false,
  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/authUser");
      

      set({ authUser: res.data.user, isCheckingAuth: false });
    } catch (error) {
      set({ authUser: null });
      console.log(error);
    } finally {
      set({ isCheckingAuth: false });
    }
  },
  signUp: async (info) => {
    try {
      const res = await axios.post(
        "https://2a1afbed-b0f1-4863-b059-6f2d67e34978-00-1h9lnnoahpges.picard.replit.dev:8000/api/auth/signup",
        info,
      );
      set({ authUser: res.data, isSignedIn: true });
    } catch (error) {
      console.log(error);
    }
  },
  logIn: async (info) => {
    console.log(info);
    try {
      const res = await axiosInstance.post("/auth/login", info);

      set({ isLoggedIn: true, authUser: res.data });
    } catch (error) {
      console.log(error);
    }
  },
  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
    } catch (error) {
      console.log(error);
    }
  },
  updatePic: async (data) => {
    set({ isUpdating: true });
    try {
      const pic = data.userPic;
      const res = await axiosInstance.put("/auth/update", { userPic:pic });
      console.log(res.data)
      set({ authUser: res.data });
      
    } catch (error) {
      console.log(error);
    } finally {
      set({ isUpdating: false });
    }
  },
}));
