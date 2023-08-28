import axios from "axios";

export const api = axios.create({
  baseURL: "https://mercado-laravel.onrender.com/api/",
  timeout: 7000,
});
