import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http:HttpClient) { }

  getReports() {
    return this.http.get('https://thereportoftheweek-api.herokuapp.com/reports');
    }
}
