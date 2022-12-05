import axios from "axios";

const API_URL = "http://localhost:8080/api/category/";
// const API_URL = "https://desolate-hollows-16342.herokuapp.com/api/category/";

//Create new Category
const creatCateService = async (postData, token) => {
  //   console.log("data from createPost Service is", postData);
  //   console.log("Token from createPost Service is", token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, postData, config);
  return response.data;
};

//Getting All Categories
const getCateService = async () => {
  /*with checking login token */
  const response = await axios.get(API_URL);
  return response.data;
};

//Delete category
const deleteCateService = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL + "delCate", id, config);
  return response.data;
};

const cateService = {
  creatCateService,
  getCateService,
  deleteCateService,
};

export default cateService;
