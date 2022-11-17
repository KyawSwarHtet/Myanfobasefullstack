import axios from "axios";

// const API_URL = "http://localhost:8080/api/favourite/";
const API_URL = "https://desolate-hollows-16342.herokuapp.com/api/favourite/";

//Create new Favourite
const creatFavService = async (postData, token) => {
  console.log("data from createPost Service is", postData);
  console.log("Token from createPost Service is", token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, postData, config);
  return response.data;
};

//Getting All Post
const getFavService = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  /*with checking login token */
  const response = await axios.get(API_URL, config);
  /*without checking login token */
  //   const response = await axios.get(API_URL);
  return response.data;
};

//Delete user post
const deleteFavService = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + id, config);
  return response.data;
};

const favService = {
  creatFavService,
  getFavService,
  deleteFavService,
};

export default favService;
