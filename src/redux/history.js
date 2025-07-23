import { createSlice } from "@reduxjs/toolkit";

const history = createSlice({
  name: 'history',
  initialState: [],
  reducers: {
    deleteHistory(state, action) {
      state.splice(action.payload, 1)
    }
    ,
    removeHistory(state) {
      state = []
    }
  }

})

export const {deleteHistory, removeHistory} = history.actions
export default history