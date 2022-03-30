import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Table } from 'src/app/shared/models/Table';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  private configUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getAllTableRecords() {
    return this.http.get<Table[]>(`${this.configUrl}/table`);
  }
  postTableRecord(body: Table) {
    return this.http.post<any>(`${this.configUrl}/table`, body);
  }
  deleteTableRecord(id: number | string) {
    return this.http.delete<Table>(`${this.configUrl}/table/${id}`);
  }
  getOneTableRecord(id: number) {
    return this.http.get<Table>(`${this.configUrl}/table/${id}`);
  }
  getAuthorRecords(authorName: string) {
    return this.http.get<Table[]>(
      `${this.configUrl}/table?author=${authorName}`
    );
  }
}
