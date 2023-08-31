import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  name: 'rooms',
  rooms: [],
  roomsInfo: {},
  status: 'idle',
};

// Fetch Rooms

const url = 'http://localhost:4000';

/* export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async () => {
  const response = await fetch(`${url}/rooms`);
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error('Something went wrong!');
}); */

export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async () => {
  const token = localStorage.getItem('tokenKey');

  try {
    const response = await axios.get(`${url}/rooms`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      const data = await response.data;
      return data;
    }
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});

// Fetch Rooms Details

export const fetchRoomsDetails = createAsyncThunk('rooms/fetchRoomsDetails', async (id) => {
  const response = await fetch(`${url}/rooms/${id}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error('Something went wrong!');
});

// POST room

export const createRoom = createAsyncThunk('rooms/createRoom', async ({
  userId, name, photo, cost, description,
}) => {
  const payload = {
    userId,
    name,
    photo,
    cost,
    description,
  };
  const response = await axios.post(`${url}/rooms`, payload);
  return response.data;
});

// Delete Room

export const deleteRoom = createAsyncThunk('rooms/deleteRoom', async (id) => {
  const response = await axios.delete(`${url}/rooms/${id}`);
  if (response.status) {
    return id;
  }

  throw new Error('Something went wrong!');
});

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    selectedRoom: (state, action) => {
      const selectedRoom = action.payload;
      return {
        ...state,
        roomsInfo: selectedRoom,
      };
    },
    addRoom: (state, action) => {
      const newRoom = action.payload;
      state.rooms.push(newRoom);
    },
    deleteRoomReducer: (state, action) => {
      const id = action.payload;
      state.rooms = state.rooms.filter((room) => room.id !== id);
    },
  },
  extraReducers: (build) => {
    build
      .addCase(fetchRooms.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRooms.fulfilled, (state, action) => ({
        ...state,
        status: 'success',
        rooms: action.payload,
      }))
      .addCase(fetchRooms.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.payload,
      }))
      .addCase(fetchRoomsDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRoomsDetails.fulfilled, (state, action) => ({
        ...state,
        status: 'success',
        roomsInfo: action.payload,
      }))
      .addCase(fetchRoomsDetails.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const { selectedRoom, addRoom, deleteRoomReducer } = roomsSlice.actions;
export default roomsSlice.reducer;
