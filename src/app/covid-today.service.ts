import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidTodayService {
  constructor(private http:HttpClient) { }
  public covid19ReportsAll(){
    return  this.http.get("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all");
    }
}
