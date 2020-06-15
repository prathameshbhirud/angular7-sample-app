import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular7-app';
  todaydate = new Date(); 
  jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
  // declared array of months. 
  months = ["January", "February", "March", "April", "May", "June", "July", 
  "August", "September", "October", "November", "December"];

  isavailable = false; //variable is set to true
  componentproperty;
  public persondata = [];
  formdata;
  public albumdetails = [];
  public personaldetails = [];

  constructor(private myService: MyserviceService){}

  ngOnInit(){
    this.formdata = new FormGroup({
      emailid : new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd: new FormControl("", this.passwordvalidation)
    });

    this.todaydate = this.myService.showTodayDate();
    console.log(this.myService.serviceproperty); 
    this.myService.serviceproperty = "component created"; 
    // value is changed. 
    this.componentproperty = this.myService.serviceproperty; 
    this.myService.getData().subscribe((data) => {
      console.log(Object.keys(data));
      this.persondata = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.persondata);
   });

   this.myService.getPhotosData().subscribe((data) => {
      this.albumdetails = Array.from(Object.keys(data), k => data[k]);
      console.log(this.albumdetails);
   });


   this.myService.getData().subscribe((data) => {
      this.personaldetails = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.personaldetails);
    });
  }

  btnClick(e){
    this.isavailable = !this.isavailable;
    alert('Button is clicked.');
    console.log(e);
  }

  onMonthChange(e){
    console.log("Changed month from the Dropdown to : " + e.target.value);
  }

  onClickSubmit(data) {
    alert("Entered Email id : " + data.emailid); 
 }

 passwordvalidation(fc){
  if (fc.value.length < 5) {
    return {"passwd" : true};
  }
 }

 onDrop(event: CdkDragDrop<string[]>) {
  if (event.previousContainer === event.container) {
     moveItemInArray(event.container.data, 
        event.previousIndex, event.currentIndex);
  } else {
     transferArrayItem(event.previousContainer.data,
     event.container.data,
     event.previousIndex,
     event.currentIndex);
  }
}
}
