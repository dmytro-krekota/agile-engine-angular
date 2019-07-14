import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectFacilityState = createFeatureSelector('socket');

export const selectMessages = createSelector(
  selectFacilityState,
  (state: any) => state.messages
);

export const selectUsers = createSelector(
  selectFacilityState,
  (state: any) => state.users
);
