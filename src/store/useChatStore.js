import { create } from "zustand";

import { axiosInstance } from "../lib/axios.js";

export const useChatStore = create((set) => ({
  selectedUser: null,
  setSelectedUser: (selectedUser) => set({ selectedUser }),
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
  getMessages: async (userId) => {
    set({ isMessagesLoading: true });
    try {
      const res = await axiosInstance.get(`/message/${userId}`);
      set({ messages: res.data });
    } catch (error) {
      console.log(error.message);
    } finally {
      set({ isMessagesLoading: false });
    }
  },
  sendMessage: async (userId, message) => {
    try {
      console.log(message)
      const res = await axiosInstance.post(`/message/send/${userId}`, { message });
    
      set((state)=>({messages:[...state.messages,res.data]}))
    } catch (error) {
      console.log(error.message);
    }
  },
}));
