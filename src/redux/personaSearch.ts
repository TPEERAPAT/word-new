/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

import type { PersonaSearchType } from '#types/Persona';

const initialState: PersonaSearchType = {
  demographic: {
    male: false,
    female: false,
    age: 'Age: All',
    expense: 'Expense: All',
    address: [],
    payor: [],
  },
  clinical: [],
  healthCondition: [],
  location: [],
  startDate: new Date(),
  endDate: new Date(),
};

export const userSlice = createSlice({
  name: 'personaSearch',
  initialState,
  reducers: {
    updatePersonaDemographicSearch: (state, action) => {
      state.demographic = action.payload;
    },
    updatePersonaClinicalSearch: (state, action) => {
      state.clinical = action.payload;
    },
    updatePersonaHealthConditionSearch: (state, action) => {
      state.healthCondition = action.payload;
    },
    updatePersonaLocationSearch: (state, action) => {
      state.location = action.payload;
    },
    updatePersonaStartDateSearch: (state, action) => {
      state.startDate = action.payload;
    },
    updatePersonaEndDateSearch: (state, action) => {
      state.endDate = action.payload;
    },
  },
});

// export type navbarPropType = typeof initialState;
export const {
  updatePersonaDemographicSearch,
  updatePersonaClinicalSearch,
  updatePersonaHealthConditionSearch,
  updatePersonaLocationSearch,
  updatePersonaStartDateSearch,
  updatePersonaEndDateSearch,
} = userSlice.actions;
export default userSlice.reducer;
