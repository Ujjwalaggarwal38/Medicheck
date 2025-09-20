import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    messengerFormVisible: false,
  },
  reducers: {
    toggleMessengerForm: (state, action) => {
      state.messengerFormVisible = action.payload;
    },
  },
});

export const { toggleMessengerForm } = modalSlice.actions;
export default modalSlice.reducer;
