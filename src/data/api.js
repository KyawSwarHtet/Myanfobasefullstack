import axios from "axios";

const apiUrl = "https://desolate-hollows-16342.herokuapp.com/api/";
// const apiUrl = "http://localhost:8080/api/";

export const multipleFilesUpload = async (data) => {
  try {
    await axios.post(apiUrl + "post", data);
  } catch (error) {
    throw error;
  }
};

export const getMultipleFiles = async () => {
  try {
    const { data } = await axios.get(apiUrl + "post");
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
    await axios.put(apiUrl + `post/${id}`, data);
  } catch (error) {
    throw error;
  }
};

export const deletePosts = async (id) => {
  try {
    await axios.delete(apiUrl + `post/${id}`);
  } catch (error) {
    throw error;
  }
};

//add category
export const Addcategory = async (data) => {
  try {
    await axios.post(apiUrl + "category", data);
  } catch (error) {
    throw error;
  }
};

//get category
export const getCategory = async () => {
  try {
    const { data } = await axios.get(apiUrl + "category");
    return data;
  } catch (error) {
    throw error;
  }
};
