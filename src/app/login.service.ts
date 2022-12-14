import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Admin} from "./admin";
import {Observable} from "rxjs";
import {LoginComponent} from "./auth/login/login.component";
import {Teacher} from "./teacher";
import {Parent} from "./parent";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogged: boolean = false;
  loggedUser:Admin=new Admin();
  private adminURL = "http://localhost:9090/admin/login/";
  private teacherURL = "http://localhost:9091/teacher/login/";
  private parentURL = "http://localhost:9092/parent/login/";
  private studentURL = "http://localhost:9093/student/login/";

  constructor(private httpClient: HttpClient) {

  }

  loginAdmin(username:String,password:String): Observable<object> {
    return this.httpClient.get(`${this.adminURL}`+username+"/"+password);
  }
  loginParent(username:String,password:String): Observable<object> {
    return this.httpClient.get(`${this.parentURL}`+username+"/"+password);
  }
  loginTeacher(username:String,password:String): Observable<object> {
    return this.httpClient.get(`${this.teacherURL}`+username+"/"+password);
  }


  loginStudent(username: String, password: String) {

    return this.httpClient.get(`${this.studentURL}`+username+"/"+password);


  }
}
