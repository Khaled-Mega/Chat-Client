import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: "https://fictional-yodel-5g97jq57w47rfvxp6-3000.app.github.dev/api/",
  withCredentials:true
})