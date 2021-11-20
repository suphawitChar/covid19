import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Covid19webService {

  constructor(private http: HttpClient) { }

  public covid19Reports(){
  return  this.http.get("https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces");
  }
}
