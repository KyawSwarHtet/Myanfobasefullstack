import axios from "axios";

const API_URL = "http://localhost:8080/api/post/";

//Create new Post
const creatPosts = async (postData, token) => {
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
const getAllPosts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};

//Delete user post
const deletePosts = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + id, config);
  return response.data;
};

//Edit user post
const editPosts = async (postData, token) => {
  console.log("Post data Service from API", postData);
  const id = postData.id;
  console.log("id in service is", id);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(API_URL + id, postData, config);
  console.log("resopn data edit is");
  console.log("post data edit is", postData);
  return response.data;
};

const postService = {
  creatPosts,
  getAllPosts,
  deletePosts,
  editPosts,
};

export default postService;
