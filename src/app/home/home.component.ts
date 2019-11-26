import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private _router:Router) { }
showBreweries():void {
  this._router.navigate(['list']);
}

showReports():void {
 this._router.navigate(['reports']);
}

  ngOnInit() {
  }

  
  
  


}
