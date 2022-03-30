import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { TableService } from 'src/app/core/services/table/table.service';
import { Table } from '../../models/Table';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent implements OnInit {
  name: string = '';
  data!: Table[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private tableService: TableService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.name = params['name'];
    });
    this.tableService.getAuthorRecords(this.name).subscribe((data: Table[]) => {
      this.data = data;
    });
  }
}
