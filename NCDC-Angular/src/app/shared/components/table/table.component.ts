import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TableService } from 'src/app/core/services/table/table.service';
import {
  deleteTableRecord,
  getTableRecords,
} from 'src/app/store/actions/table-record.actions';
import { selectTableRecordFeature } from 'src/app/store/selectors/table-record.selectors';
import { Table } from '../../models/Table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  elements$ = this.store.pipe(select(selectTableRecordFeature));
  elements: Table[] = [];
  constructor(private store: Store, private tableService: TableService) {}

  ngOnInit(): void {
    this.store.dispatch(getTableRecords());
    this.elements$.subscribe(
      (data) => (this.elements = JSON.parse(JSON.stringify(data)))
    );
  }
  deleteRecordFromTable(id: number | string) {
    this.store.dispatch(deleteTableRecord(id));
  }
}
