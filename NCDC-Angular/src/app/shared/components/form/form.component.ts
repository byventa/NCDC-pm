import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TableService } from 'src/app/core/services/table/table.service';
import { AppState } from 'src/app/store';
import {
  addTableRecord,
  addTableRecordSuccess,
} from 'src/app/store/actions/table-record.actions';
import { Table } from '../../models/Table';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  authorOptions!: string[];

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private tableService: TableService
  ) {}

  ngOnInit(): void {
    this.tableService.getAllTableRecords().subscribe((data: Table[]) => {
      this.authorOptions = data
        .map((el) => el.author)
        .filter((v, i, a) => a.indexOf(v) === i);
    });
    this.form = this.fb.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(7)]],
      author: ['', [Validators.required]],
    });
  }
  submitForm() {
    if (this.form.status === 'VALID') {
      this.store.dispatch(addTableRecord(this.form.value));
      this.form.reset();
    }
  }
}
