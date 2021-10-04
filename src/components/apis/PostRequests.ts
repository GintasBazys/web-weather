import axios from "axios";
import { baseUrl } from "utils/baseUrl";

export const postLocation = async (searchInput: string) => {
  const response = await axios.post(baseUrl, {
    location: searchInput,
  });
  return response;
};
