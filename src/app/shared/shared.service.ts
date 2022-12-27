import { Injectable } from '@angular/core';
import {Parent} from "../parent";
import {User} from "../user";

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  isAdmin !: boolean;
  isTeacher !: boolean;
  isStudent !: boolean;
  isParent !: boolean;

  private user:User=new User()

  setUserOb(user:User){
    this.user=user
  }
  getUserOb(){
    return this.user
  }

  constructor() { }

  setAdmin(isAdmin: boolean) {
    this.isAdmin = isAdmin;
  }

  getAdmin() {
    return this.isAdmin;
  }
  setTeacher(isTeacher: boolean) {
    this.isTeacher = isTeacher;
  }

  getTeacher() {
    return this.isTeacher;
  }

  setStudent(isStudent: boolean) {
    this.isStudent = isStudent;
  }

  getStudent() {
    return this.isStudent;
  }

  setParent(isParent: boolean) {
    this.isParent =isParent;
  }

  getParent() {
    return this.isParent;
  }
}
