import { create } from "zustand";

import { axiosInstance } from "../lib/axios.js";

export const useChatStore = create((set) => ({
  selectedUser: null,
  setSlectedUser: (selectedUser) => set({ selectedUser }),
  users: [],
  messages: [],
  isUserLoading: false,
  isMessagesLoading: false,
  getUsers: async () => {
    set({ isUserLoading: true });
    try {
      const res = await axiosInstance.get("/message/users");
      set({ users: res.data });
    } catch (error) {
      console.log(error.message);
    } finally {
      setTimeout(() => set({ isUserLoading: false }), 1000);
    }
  },
}));
