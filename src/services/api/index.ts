import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://corebiz-test.herokuapp.com/api/v1/'
})