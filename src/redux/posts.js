import { createSlice } from '@reduxjs/toolkit';

const posts = createSlice({
  name: 'posts',
  initialState: 
    []
  ,
  reducers: {
    addPost: (state, action) => {
      state = action.payload;
      return state;
    },
    deletePost: (state, action) => {
      state = state.filter(p => p.id !== action.payload);
    },
    updatePost: (state, action) => {
      const index = state.findIndex(p => p.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
  },
});

export const { addPost, deletePost, updatePost } = posts.actions;
export default posts