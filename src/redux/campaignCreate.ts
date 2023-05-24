/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

import type { CampaignDataType } from '#types/Campaign';

const initialState: CampaignDataType = {
  name: '',
  alias: '',
  description: '',
  cost: 0,
  startDate: new Date(),
  endDate: new Date(),
  estimatePatient: 0,
  expectValue: 0,
  personaTag: {
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
  },
};

export const userSlice = createSlice({
  name: 'campaignCreate',
  initialState,
  reducers: {
    updateCampaignNameCreate: (state, action) => {
      state.name = action.payload;
    },
    updateCampaignAliasCreate: (state, action) => {
      state.alias = action.payload;
    },
    updateCampaignDescriptionCreate: (state, action) => {
      state.description = action.payload;
    },
    updateCampaignCostCreate: (state, action) => {
      state.cost = action.payload;
    },
    updateCampaignStartDateCreate: (state, action) => {
      state.startDate = action.payload;
    },
    updateCampaignEndDateCreate: (state, action) => {
      state.endDate = action.payload;
    },
    updateCampaignEstimatePatientCreate: (state, action) => {
      state.estimatePatient = action.payload;
    },
    updateCampaignExpectValueCreate: (state, action) => {
      state.expectValue = action.payload;
    },
    updateCampaignDemographicCreate: (state, action) => {
      state.personaTag.demographic = action.payload;
    },
    updateCampaignClinicalCreate: (state, action) => {
      state.personaTag.clinical = action.payload;
    },
    updateCampaignHealthConditionCreate: (state, action) => {
      state.personaTag.healthCondition = action.payload;
    },
    updateCampaignLocationCreate: (state, action) => {
      state.personaTag.location = action.payload;
    },
  },
});

// export type navbarPropType = typeof initialState;
export const {
  updateCampaignNameCreate,
  updateCampaignAliasCreate,
  updateCampaignDescriptionCreate,
  updateCampaignCostCreate,
  updateCampaignStartDateCreate,
  updateCampaignEndDateCreate,
  updateCampaignDemographicCreate,
  updateCampaignClinicalCreate,
  updateCampaignHealthConditionCreate,
  updateCampaignLocationCreate,
} = userSlice.actions;
export default userSlice.reducer;
