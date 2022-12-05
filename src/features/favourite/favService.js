import axios from "axios";

const API_URL = "http://localhost:8080/api/";
// const API_URL = "https://desolate-hollows-16342.herokuapp.com/api/favourite/";

//Create new Favourite
const creatFavService = async (postData, token) => {
  console.log("data from createPost Service is", postData);
  console.log("Token from createPost Service is", token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL + "favourite", postData, config);
  return response.data;
};

//Add FavNumber Length
const addFavLengthService = async (data, token) => {
  console.log("id fav data is", data);
  console.log("id fav token is", token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL + "favoriteNumber", data, config);
  console.log("resonsd data", response.data.FavNumber);
  return response.data.FavNumber;
};

//Check i alread add fav or not
const checkMyFav = async (data, token) => {
  console.log("id fav data is", data);
  console.log("id fav token is", token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL + "favorited", data, config);
  console.log("resonsd data", response.data);
  return response.data;
};

//Getting All Post
const getFavService = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  /*with checking login token */
  const response = await axios.post(API_URL + "getFavposts", data, config);
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
  const response = await axios.delete(API_URL + "favorited", id, config);
  return response.data;
};

const favService = {
  creatFavService,
  getFavService,
  deleteFavService,
  addFavLengthService,
  checkMyFav,
};

export default favService;
