import axios from "axios";

const API_URL = "http://localhost:8080/api/users/";
// const API_URL = "https://desolate-hollows-16342.herokuapp.com/api/users/";

//Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//get detail data Login user
const userDetailData = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + "me", config);
  console.log("auth service response data", response.data);
  return response.data;
};

//update user data Login user
const updateUserData = async (postData, token) => {
  const resultData = Object.fromEntries(postData.entries());
  const id = resultData.id;
  console.log("result data id from auth Service", id);
  console.log("result data  from auth Service", postData);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(API_URL + `update/${id}`, postData, config);

  return response.data;
};

//Logout user
const logout = () => {
  localStorage.removeItem("user");
};
const authService = {
  register,
  logout,
  login,
  userDetailData,
  updateUserData,
};

export default authService;
