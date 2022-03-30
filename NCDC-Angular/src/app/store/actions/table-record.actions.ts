import { createAction, props } from '@ngrx/store';
import { Table } from 'src/app/shared/models/Table';

export const addTableRecord = createAction(
  '[Form Component] Add Table Record',
  (data: Table) => ({ data })
);
export const addTableRecordSuccess = createAction(
  '[Form Component] Add Table Record Success',
  (data: Table) => ({ data })
);

export const getTableRecords = createAction('[Table] Get Table Records');
export const getTableRecordsSuccess = createAction(
  '[Table] Get Table Records Success',
  (data: Array<Table>) => ({ data })
);

export const deleteTableRecord = createAction(
  '[Table] Delete table record',
  (data: number | string) => ({ data })
);

export const deleteTableRecordSuccess = createAction(
  '[Table] Delete table record success',
  (data: number | string) => ({ data })
);
