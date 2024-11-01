import { createSlice } from '@reduxjs/toolkit';

import { residuesApi } from '../api';

import { IResiduesState } from './types.model';

const initialState: IResiduesState = {};

export const residuesSlice = createSlice({
  name: 'residues',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const { getResidues, getResiduesMock } = residuesApi.endpoints;

    builder
      .addMatcher(getResidues.matchFulfilled, (state: IResiduesState, { payload }) => {
        state.residues = payload;
      })
      .addMatcher(getResiduesMock.matchFulfilled, (state: IResiduesState, { payload }) => {
        state.residues = payload;
      });
  },
});
