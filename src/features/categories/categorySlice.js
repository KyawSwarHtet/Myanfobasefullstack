import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cateService from "./categoryService";

const initialState = {
  categories: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Create new post
export const createCate = createAsyncThunk(
  "category/create",
  async (postData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await cateService.creatCateService(postData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Get Categories
export const getCate = createAsyncThunk(
  "category/getAll",
  async (data, thunkAPI) => {
    try {
      //adding token to access user
      return await cateService.getCateService();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Delete post
export const deleteCate = createAsyncThunk(
  "category/remove",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await cateService.deleteCateService(data, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const cateSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.categories.push(action.payload);
        // console.log("action pay load is", action.payload);
      })
      .addCase(createCate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.categories = action.payload;
        // console.log("action pay load getpost is", action.payload);
      })
      .addCase(getCate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteCate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.categories = state.categories.filter((category) => {
          return category._id !== action.payload.id;
        });
      })
      .addCase(deleteCate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = cateSlice.actions;
export default cateSlice.reducer;
