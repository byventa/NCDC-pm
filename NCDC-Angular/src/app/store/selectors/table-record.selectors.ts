import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, tableRecordFeatureKey } from '../reducers/table-record.reducer';

export const selectTableRecordFeature = createFeatureSelector<State>(
  tableRecordFeatureKey
);

export const selectMovies = createSelector(
  selectTableRecordFeature,
  (state: State) => state
);
