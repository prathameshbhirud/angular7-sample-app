import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  serviceproperty = "Service Created"; 
  private finaldata = [];
  private apiurl = "http://jsonplaceholder.typicode.com/users";
  private photosApiurl = "https://jsonplaceholder.typicode.com/photos";

  constructor(private http: HttpClient) { }

  showTodayDate(){
    let ndate = new Date();
    return ndate;
  }

  getData() {
    return this.http.get(this.apiurl);
 }

 getPhotosData() {
  return this.http.get(this.photosApiurl);
}
}
