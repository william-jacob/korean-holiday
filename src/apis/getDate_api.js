import { instance } from "./request";

const serviceKey = process.env.REACT_APP_API_KEY;

// 왜 안되는 거지?
// const params = {
//   solYear: 2021,
//   numOfRows: 50,
//   serviceKey`,
// };

export const getPublicHoliday = async () => {
  const response = await instance.get(
    `/getHoliDeInfo?solYear=2021&numOfRows=50&ServiceKey=${serviceKey}`
  );
  return response.data;
};
