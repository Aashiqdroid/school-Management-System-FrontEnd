import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private URLforParent = "http://localhost:9092/parent"

  constructor(private http:HttpClient) { }

  getTeacherComments(teacherName:String){
    return this.http.get(this.URLforParent+"/"+teacherName)
  }
}
