import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {
  todaydate;
  newcomponent = "Entered in new component created";
  newcomponentproperty;

  constructor(private myService: MyserviceService) { }

  ngOnInit() { 
    this.todaydate = this.myService.showTodayDate(); 
    this.newcomponentproperty = this.myService.serviceproperty; 
 } 

}
