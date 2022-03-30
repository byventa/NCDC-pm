import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromTableRecord from './reducers/table-record.reducer';

export interface AppState {
  [fromTableRecord.tableRecordFeatureKey]: fromTableRecord.State[];
}

export const reducers: ActionReducerMap<AppState> = {
  [fromTableRecord.tableRecordFeatureKey]: fromTableRecord.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
