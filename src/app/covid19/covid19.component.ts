import { CityReports } from './../../cityReports';
import { Component, OnInit } from '@angular/core';
import { Covid19webService } from '../covid19web.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.scss']
})
export class Covid19Component implements OnInit {
  ELEMENT_DATA!: CityReports[];
  displayedColumns: string[] = ['province', 'new_case','total_case', 'new_case_excludeabroad', 'total_case_excludeabroad', 'new_death', 'total_death', 'update_date'];
  dataSource =  new MatTableDataSource<CityReports>(this.ELEMENT_DATA);

  constructor(private service:Covid19webService) { }

  ngOnInit(): void {
    this.getAllReport();
  }

  public getAllReport(){
    let resp=this.service.covid19Reports();
    resp.subscribe(report=>this.dataSource.data=report as CityReports[]);
  }

}
