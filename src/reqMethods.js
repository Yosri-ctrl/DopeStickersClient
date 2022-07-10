import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_LINK;
export const publicReq = axios.create({
  baseURL: BASE_URL,
});

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzBiMjM5YzQ5YzMxODczMjAyZjExMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzAxNjMxNywiZXhwIjoxNjU3Mjc1NTE3fQ.M7PKBgkHFIW5OuBsdrxrbDalzrhLdafnHrdsvxPTQEg";
export const userReq = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
