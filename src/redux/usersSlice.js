import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const response = await fetch("https://randomuser.me/api/?results=5");
  return response.json();
});

const usersSlice = createSlice ({
  name: 'user',
  initialState: {
    users: [],
    isLoading: false,
    isError: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  }
})

export default usersSlice.reducer;
