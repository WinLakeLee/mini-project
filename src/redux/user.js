import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push({ ...action.payload, id: Date.now() });
    },
    deleteUser: (state, action) => {
      return state.filter(user => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const existing = state.find(user => user.id === id);
      if (existing) {
        existing.name = name;
        existing.email = email;
      }
    },
  },
});

export const { addUser, deleteUser, updateUser } = user.actions;
export default user;