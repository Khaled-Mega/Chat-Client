import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: "https://aa44f092-f13e-4677-806f-375c435859b2-00-3t3t69f56n9nj.worf.replit.dev:8000/api/",
  withCredentials:true
})