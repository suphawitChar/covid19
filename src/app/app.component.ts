import { Component } from '@angular/core';

export interface  PeriodicElement{
  txn_date: String;
  province: String;
  new_case: number;
  total_case:  number;
}

const ELEMENT_DATA: PeriodicElement[] = [
{txn_date: "2021-11-19", province: "กระบี่", new_case: 86, total_case: 9376},
{txn_date: "2021-11-19", province: "กระบี่", new_case: 86, total_case: 9376},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covid19';
  displayedColumns: string[] = ['province', 'new_case','total_case', 'new_case_excludeabroad', 'total_case_excludeabroad', 'new_death', 'total_death', 'update_date'];
  dataSource = ELEMENT_DATA;
}
