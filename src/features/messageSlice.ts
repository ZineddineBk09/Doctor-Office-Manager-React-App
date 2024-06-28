import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../lib/axios";

// Async thunk to fetch messages
export const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",
  async () => {
    const response = await axios.get(`/messages`);
    return response.data;
  }
);

// Async thunk to send a message
export const sendMessage = createAsyncThunk(
  "messages/sendMessage",
  async (message: { content: string; patientId: string }) => {
    const response = await axios.post(`/messages`, message);
    return response.data;
  }
);

const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    messages: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.messages = action.payload;
      })
      .addCase(fetchMessages.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(sendMessage.fulfilled, (state: any, action: any) => {
        state.messages.push(action.payload);
      });
  },
});

export default messagesSlice.reducer;
