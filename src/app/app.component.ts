import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface  PeriodicElement{
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covid19';
  // displayedColumns: string[] = ['province', 'new_case','total_case', 'new_case_excludeabroad', 'total_case_excludeabroad', 'new_death', 'total_death', 'update_date'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
}

