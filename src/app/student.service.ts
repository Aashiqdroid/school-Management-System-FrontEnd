import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "./student";
import {Result} from "./result";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private URLforStudent = "http://localhost:9093/student";
  constructor(private httpClient: HttpClient) { }

  getAllStudents(){
    return this.httpClient.get(this.URLforStudent)
  }
  updateStudent(id:String,student:Student){
    return this.httpClient.put(this.URLforStudent+"/"+id,student)
  }
  deleteStudent(id:String){
    return this.httpClient.delete(this.URLforStudent+"/"+id)
  }
  addResult(id:String,result:Result){
    return this.httpClient.put(this.URLforStudent+"/addresult/"+id,result)
  }
  getExamResults(parentName:String,studentName:String){
    return this.httpClient.get(this.URLforStudent+"/"+parentName+"/"+studentName)
  }
  getStudentsOfParent(parentName:String){
    return this.httpClient.get(this.URLforStudent+"/"+parentName)
  }
}
