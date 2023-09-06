import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: 'idle',
  error: null,
  selectedBranchId: '',
};

/* Fetch rooms */
export const fetchRooms = createAsyncThunk('branchRoom/fetchRooms', async (branchId) => {
  const response = await axios.get(`https://rails-b62y.onrender.com/rooms?branch_id=${branchId}`);
  return response.data;
});

/* Reducer */
const branchRoomSlice = createSlice({
  name: 'branchRoom',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state, action) => { // Corrected the duplicate addCase statement
        state.loading = 'loading';
        state.selectedBranchId = action.meta.arg; // Moved this line inside fetchRooms.pending
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});

export default branchRoomSlice.reducer;
