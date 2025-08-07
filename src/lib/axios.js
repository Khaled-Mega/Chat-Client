import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: "https://2a1afbed-b0f1-4863-b059-6f2d67e34978-00-1h9lnnoahpges.picard.replit.dev:8000/api",
  withCredentials:true
})