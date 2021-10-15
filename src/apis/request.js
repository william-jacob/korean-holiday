import axios from "axios";

const { REACT_APP_ALLOW_CORS, REACT_APP_URL } = process.env;

export const instance = axios.create({
  baseURL: `${REACT_APP_ALLOW_CORS}/${REACT_APP_URL}`,
});
