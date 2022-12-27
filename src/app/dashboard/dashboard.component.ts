import {Component, OnInit} from '@angular/core';
import {SharedService} from "../shared/shared.service";
import {ServiceService} from "../service.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  isAdmin:boolean=false
  isTeacher:boolean=false
  isStudent:boolean=false
  isParent:boolean=false

  userType:String="";

  constructor(private sharedService:SharedService,
              private service:ServiceService) {
    this.isAdmin=this.sharedService.getAdmin()
    this.isTeacher=this.sharedService.getTeacher()
    this.isStudent=this.sharedService.getStudent()
    this.isParent=this.sharedService.getParent()
    if (this.isAdmin){
      this.userType="Admin"
    }else if (this.isTeacher){
      this.userType="Teacher"
    }else if(this.isParent){
      this.userType="Parent"
    }else if (this.isStudent){
      this.userType="Student"
    }
  }

  ngOnInit(): void {

  }


}
