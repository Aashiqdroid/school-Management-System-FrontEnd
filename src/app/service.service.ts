import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Notice} from "./notice";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url = "http://localhost:9094/notice/assign/";
  private url1 = "http://localhost:9094/notice";

  constructor(private httpClient: HttpClient) { }

  addNotices(teacherName:String,notice:Notice): Observable<object>{
    return this.httpClient.post(this.url+teacherName,notice);
  }

  getNotices(): Observable<object>{
    return this.httpClient.get(this.url1);
  }


}
