import { Component, OnInit } from '@angular/core';

import { KumarService } from '../kumar.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

brews: object;
  constructor( private http:KumarService) { }

  ngOnInit() {
    this.http.getBeer().subscribe(data =>{
      this.brews = data;
      console.log(this.brews);
    })
  
  }

}
