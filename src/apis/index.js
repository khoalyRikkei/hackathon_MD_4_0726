import axios from "axios";
const API = "http://localhost:1080/api/v1/";

const getDataAPI = async (endpoint) => {
  try {
    const response = await axios.get(API + endpoint);
    return response.data;
  } catch (error) {
    console.log(124, error);
  }
};

const getQuestionByCondition = async (endpoint, query) => {
  console.log(1111, API + endpoint);
  try {
    const response = await axios.get(API + endpoint, {
      params: query,
    });

    return response.data;
  } catch (error) {}
};

export { getDataAPI, getQuestionByCondition };
