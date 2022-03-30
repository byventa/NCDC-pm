import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addTableRecord,
  addTableRecordSuccess,
  deleteTableRecord,
  deleteTableRecordSuccess,
  getTableRecords,
  getTableRecordsSuccess,
} from '../actions/table-record.actions';
import { concatMap, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import { concat } from 'rxjs';
import { TableService } from 'src/app/core/services/table/table.service';

@Injectable()
export class TableRecordEffects {
  loadRecords$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTableRecords),
      exhaustMap(() =>
        this.tableService
          .getAllTableRecords()
          .pipe(map((records) => getTableRecordsSuccess(records)))
      )
    )
  );

  addRecord$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTableRecord),
      tap((data) => console.log(data)),
      concatMap(({ data }) =>
        this.tableService
          .postTableRecord(data)
          .pipe(map((newRecord) => addTableRecordSuccess(newRecord)))
      )
    )
  );

  deleteRecord$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTableRecord),
      mergeMap(({ data }) =>
        this.tableService
          .deleteTableRecord(data)
          .pipe(map(() => deleteTableRecordSuccess(data)))
      )
    )
  );

  constructor(private actions$: Actions, private tableService: TableService) {}
}
