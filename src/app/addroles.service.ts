import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Teacher} from "./teacher";
import {Parent} from "./parent";
import {Student} from "./student";

@Injectable({
  providedIn: 'root'
})
export class AddrolesService {

  private URLforTeacher = "http://localhost:9091/teacher";
  private URLforParent = "http://localhost:9092/parent";
  private URLforStudent = "http://localhost:9093/student";

  constructor(private httpClient: HttpClient) { }

  registerTeacher(teacher: Teacher): Observable<object> {

    return this.httpClient.post(`${this.URLforTeacher}`, teacher);

  }
  registerParent(parent: Parent): Observable<object> {

    return this.httpClient.post(`${this.URLforParent}`, parent);

  }


  setParentAndTeacherWithStudent(teacherName:String,parentName: String, student:Student): Observable<object>{
    return this.httpClient.post(this.URLforStudent+"/assign/"+teacherName+"/"+parentName,student)
  }
  //http://localhost:9091/teacher/mahawar
  addListOfStudentsToTeaacher(teacherName:String,parentName:String, student:Student): Observable<object>{
    return this.httpClient.put(this.URLforTeacher+"/"+teacherName+"/"+parentName,student)
  }



}
