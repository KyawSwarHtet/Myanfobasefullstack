import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import favService from "./favService";

const initialState = {
  favorite: [],
  favLengths: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Create new post
export const createFav = createAsyncThunk(
  "favorite/create",
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

//Add Favorite Number if other already add this post to favorite collection
export const addFavLength = createAsyncThunk(
  "favorite/addFavLength",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const result = await favService.checkMyFav(data, token);
      return result;
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
  "favorite/getAll",
  async (data, thunkAPI) => {
    try {
      //adding token to access user
      const token = thunkAPI.getState().auth.user.token;
      return await favService.getFavService(data, token);
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
  "favorite/remove",
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
  name: "favorite",
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
        state.favorite.push(action.payload);
        // console.log("action pay load is", action.payload);
      })
      .addCase(createFav.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addFavLength.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addFavLength.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.favLengths = action.payload;
        // console.log("action pay load getpost is", action.payload);
      })
      .addCase(addFavLength.rejected, (state, action) => {
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
        state.favorite = action.payload;
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
        state.favorite = state.favorite.filter((post) => {
          // console.log("post delete id is", post._id);
          // console.log("post delete action payload is", action.payload);
          return (
            post.postId !== action.payload.postId &&
            post.user !== action.payload.user
          );
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
