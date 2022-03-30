import { Action, createReducer, on } from '@ngrx/store';
import {
  addTableRecordSuccess,
  deleteTableRecordSuccess,
  getTableRecordsSuccess,
} from '../actions/table-record.actions';

export const tableRecordFeatureKey = 'tableRecord';

export interface State {
  id: number | string;
  title: string;
  author: string;
}

export const initialState: State[] = [];

export const reducer = createReducer(
  initialState,
  on(addTableRecordSuccess, (state, record) => [...state, record.data]),
  on(getTableRecordsSuccess, (state, record) => [...record.data]),
  on(deleteTableRecordSuccess, (state, data) =>
    state.filter((el) => {
      return el.id != data.data;
    })
  )
);
