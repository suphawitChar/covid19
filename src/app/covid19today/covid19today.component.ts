import { ReportsAll } from './../../ReportsAll';
import { CovidTodayService } from './../covid-today.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-covid19today',
  templateUrl: './covid19today.component.html',
  styleUrls: ['./covid19today.component.scss']
})
export class Covid19todayComponent implements OnInit {

  ELEMENT_DATA_ALL!: ReportsAll[];
  displayColumns: string[] = ['new_case','total_case', 'new_case_excludeabroad', 'total_case_excludeabroad', 'new_death', 'total_death','update_date'];
  dataSource =  new MatTableDataSource<ReportsAll>(this.ELEMENT_DATA_ALL);

  constructor(private service:CovidTodayService) { }

  ngOnInit(): void {
    this.getAllReport();
  }

  public getAllReport(){
    let resp=this.service.covid19ReportsAll();
    resp.subscribe(report=>this.dataSource.data=report as ReportsAll[]);
  }
}
