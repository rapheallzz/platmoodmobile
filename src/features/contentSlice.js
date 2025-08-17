import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import contentService from './contentService.js';

export const fetchContent = createAsyncThunk('content/fetchContent', async (_, thunkAPI) => {
  try {
    const response = await contentService.fetchContent();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const addToFavorites = createAsyncThunk('content/addToFavorites', async (contentId, thunkAPI) => {
  try {
    const response = await contentService.addToFavorites(contentId);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const addToWatchlist = createAsyncThunk('content/addToWatchlist', async (contentId, thunkAPI) => {
  try {
    const response = await contentService.addToWatchlist(contentId);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const likeContent = createAsyncThunk('content/likeContent', async (contentId, thunkAPI) => {
  try {
    const response = await contentService.likeContent(contentId);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const fetchLikedContent = createAsyncThunk('content/fetchLikedContent', async (userId, thunkAPI) => {
  try {
    const response = await contentService.fetchLikedContent(userId);
    return response.data.likedContents;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const contentSlice = createSlice({
  name: 'content',
  initialState: {
    contentList: [],
    favorites: [],
    watchlist: [],
    likes: [],
    isLoading: false,
    isError: false,
    message: '',
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contentList = action.payload;
      })
      .addCase(fetchContent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addToFavorites.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favorites.push(action.payload);
      })
      .addCase(addToFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addToWatchlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToWatchlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.watchlist.push(action.payload);
      })
      .addCase(addToWatchlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(likeContent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(likeContent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.likes.push(action.payload);
      })
      .addCase(likeContent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(fetchLikedContent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLikedContent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.likes = action.payload;
      })
      .addCase(fetchLikedContent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default contentSlice.reducer;
