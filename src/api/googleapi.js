import axios from "axios";
const KEY = "AIzaSyD3fNn2kmZK-OoNxYovT_YHRmgY6DwECeU";

export default axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes?",
  params: {
    filter: "partial",
    maxResults: 10,
    key: KEY,
  },
});
