/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  collapse: true,
  widthTop: 'h-0',
  widthSide: 'w-[240px]',
};

export const userSlice = createSlice({
  name: 'collapse',
  initialState,
  reducers: {
    showSideBarAction: (state) => {
      state.collapse = false;
      state.widthTop = 'h-0';
      state.widthSide = 'w-[240px]';
    },
    hideSideBarAction: (state) => {
      state.collapse = true;
      state.widthTop = 'h-16';
      state.widthSide = 'w-0';
    },
  },
});

// export type navbarPropType = typeof initialState;
export const { showSideBarAction, hideSideBarAction } = userSlice.actions;
export default userSlice.reducer;
