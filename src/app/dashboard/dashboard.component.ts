import { Component } from '@angular/core';
import {SharedService} from "../shared/shared.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  isAdmin:boolean=false
  isTeacher:boolean=false
  isStudent:boolean=false
  isParent:boolean=false

  constructor(private sharedService:SharedService) {
    this.isAdmin=this.sharedService.getAdmin()
    this.isTeacher=this.sharedService.getTeacher()
    this.isStudent=this.sharedService.getStudent()
    this.isParent=this.sharedService.getParent()
  }

}
