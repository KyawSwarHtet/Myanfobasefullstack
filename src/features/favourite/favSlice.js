import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import favService from "./favService";

const initialState = {
  favourite: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Create new post
export const createFav = createAsyncThunk(
  "favouite/create",
  async (postData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await favService.creatFavService(postData, token);
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

//Get user posts
export const getFavs = createAsyncThunk(
  "favouite/getAll",
  async (_, thunkAPI) => {
    try {
      //adding token to access user
      const token = thunkAPI.getState().auth.user.token;
      return await favService.getFavService(token);
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

//Create new post
export const favLength = createAsyncThunk(
  "favouite/favLength",
  async (postData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await favService.creatFavService(postData, token);
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
export const deleteFavs = createAsyncThunk(
  "favouite/remove",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await favService.deleteFavService(id, token);
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

export const favSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createFav.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createFav.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.favourite.push(action.payload);
        // console.log("action pay load is", action.payload);
      })
      .addCase(createFav.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getFavs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFavs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.favourite = action.payload;
        // console.log("action pay load getpost is", action.payload);
      })
      .addCase(getFavs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteFavs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteFavs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.favourite = state.favourite.filter((post) => {
          // console.log("post delete id is", post._id);
          // console.log("post delete action payload is", action.payload);
          return post._id !== action.payload.id;
        });
      })
      .addCase(deleteFavs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = favSlice.actions;
export default favSlice.reducer;
