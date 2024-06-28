import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // "x-api-key": process.env.REACT_APP_API_KEY,
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
