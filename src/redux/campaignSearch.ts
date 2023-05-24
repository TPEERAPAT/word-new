/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

import type { CampaignSearchType } from '#types/Campaign';

const initialState: CampaignSearchType = {
  name: '',
  startDate: new Date(),
  endDate: new Date(),
  demographic: [],
  clinical: [],
  healthCondition: [],
  location: [],
};

export const userSlice = createSlice({
  name: 'campaignSearch',
  initialState,
  reducers: {
    updateCampaignNameSearch: (state, action) => {
      state.name = action.payload;
    },
    updateCampaignStartDateSearch: (state, action) => {
      state.startDate = action.payload;
    },
    updateCampaignEndDateSearch: (state, action) => {
      state.endDate = action.payload;
    },
    updateCampaignDemographicSearch: (state, action) => {
      state.demographic = action.payload;
    },
    updateCampaignClinicalSearch: (state, action) => {
      state.clinical = action.payload;
    },
    updateCampaignHealthConditionSearch: (state, action) => {
      state.healthCondition = action.payload;
    },
    updateCampaignLocationSearch: (state, action) => {
      state.location = action.payload;
    },
  },
});

// export type navbarPropType = typeof initialState;
export const {
  updateCampaignNameSearch,
  updateCampaignStartDateSearch,
  updateCampaignEndDateSearch,
  updateCampaignDemographicSearch,
  updateCampaignClinicalSearch,
  updateCampaignHealthConditionSearch,
  updateCampaignLocationSearch,
} = userSlice.actions;
export default userSlice.reducer;
