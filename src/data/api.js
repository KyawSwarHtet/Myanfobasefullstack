import axios from "axios";

// const apiUrl = "https://desolate-hollows-16342.herokuapp.com/api/";
const apiUrl = "http://localhost:8080/api/";

export const multipleFilesUpload = async (data) => {
  try {
    await axios.post(apiUrl + "addpost", data);
  } catch (error) {
    throw error;
  }
};

export const getMultipleFiles = async () => {
  try {
    const { data } = await axios.get(apiUrl + "getposts");
    return data;
  } catch (error) {
    throw error;
  }
};

export const getPostDetail = async (id) => {
  try {
    const { data } = await axios.get(apiUrl + `postdetail/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updatePosts = async (id, data) => {
  try {
    await axios.put(apiUrl + `updatepost/${id}`, data);
  } catch (error) {
    throw error;
  }
};

export const deletePosts = async (id) => {
  try {
    await axios.delete(apiUrl + `deletepost/${id}`);
  } catch (error) {
    throw error;
  }
};
