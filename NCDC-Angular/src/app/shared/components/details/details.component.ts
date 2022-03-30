import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableService } from 'src/app/core/services/table/table.service';
import { Table } from '../../models/Table';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id: number = -1;
  data!: Table;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tableService: TableService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'] || -1;
    });
    this.tableService.getOneTableRecord(this.id).subscribe(
      (data: Table) => {
        this.data = data;
      },
      (err) => {
        this.id = -1;
      }
    );
  }
}
