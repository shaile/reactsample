import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://60oxrorb15.execute-api.ap-south-1.amazonaws.com/dev/";
const getPublicContent = () => {
  return axios.get(API_URL + "users", { headers: authHeader() });
};
const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};
const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};
const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};
const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};
export default UserService;