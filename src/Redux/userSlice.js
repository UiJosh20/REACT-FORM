import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: { username: "" },
  },
  reducers: {
    login: (state, action) => {
      state.value.userName = action.payload; // Update userName property within value object
    },
    logout: (state) => {
      state.value = { userName: '' };
    }
  }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
