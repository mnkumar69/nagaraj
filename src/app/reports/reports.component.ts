import { Component, OnInit } from '@angular/core';

import { ReportService } from '../report.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
reports:any;
  constructor(private http:ReportService) { }

  ngOnInit() {

this.http.getReports().subscribe(data =>
  {
      this.reports=data;
      console.log('this.reports')
    });
      
  }

}
