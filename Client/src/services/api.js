import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const getScholarships = () => API.get("/scholarships");

export const addScholarship = (data) =>
  API.post("/scholarships", data);