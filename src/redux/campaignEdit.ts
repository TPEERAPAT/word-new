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
  name: 'campaignEdit',
  initialState,
  reducers: {
    updateCampaignNameEdit: (state, action) => {
      state.name = action.payload;
    },
    updateCampaignAliasEdit: (state, action) => {
      state.alias = action.payload;
    },
    updateCampaignDescriptionEdit: (state, action) => {
      state.description = action.payload;
    },
    updateCampaignCostEdit: (state, action) => {
      state.cost = action.payload;
    },
    updateCampaignStartDateEdit: (state, action) => {
      state.startDate = action.payload;
    },
    updateCampaignEndDateEdit: (state, action) => {
      state.endDate = action.payload;
    },
    updateCampaignEstimatePatientEdit: (state, action) => {
      state.estimatePatient = action.payload;
    },
    updateCampaignExpectValueEdit: (state, action) => {
      state.expectValue = action.payload;
    },
    updateCampaignDemographicEdit: (state, action) => {
      state.personaTag.demographic = action.payload;
    },
    updateCampaignClinicalEdit: (state, action) => {
      state.personaTag.clinical = action.payload;
    },
    updateCampaignHealthConditionEdit: (state, action) => {
      state.personaTag.healthCondition = action.payload;
    },
    updateCampaignLocationEdit: (state, action) => {
      state.personaTag.location = action.payload;
    },
  },
});

// export type navbarPropType = typeof initialState;
export const {
  updateCampaignNameEdit,
  updateCampaignAliasEdit,
  updateCampaignDescriptionEdit,
  updateCampaignCostEdit,
  updateCampaignStartDateEdit,
  updateCampaignEndDateEdit,
  updateCampaignDemographicEdit,
  updateCampaignClinicalEdit,
  updateCampaignHealthConditionEdit,
  updateCampaignLocationEdit,
} = userSlice.actions;
export default userSlice.reducer;
