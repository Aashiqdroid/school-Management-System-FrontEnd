import {Component, OnInit} from '@angular/core';
import {Admin} from "../../admin";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../login.service";
import {Router} from "@angular/router";
import {Teacher} from "../../teacher";
import {Parent} from "../../parent";
import {User} from "../../user";
import {SharedService} from "../../shared/shared.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  parent:Parent=new Parent();
  user:User=new User();
  loginForm!:FormGroup;
  loginMode:any;


  isAdmin:boolean=false;
  isTeacher:boolean=false;
  isStudent:boolean=false;
  isParent:boolean=false;

  constructor(private loginService: LoginService,
              private router: Router,
              private formbuilder:FormBuilder,
              private sharedService:SharedService) {
    if (this.loginMode=="Admin"){
    }
  }
  ngOnInit(): void {
    this.loginForm= this.formbuilder.group({
      username:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required)
    })
  }
  userLogin() {
    if (this.loginMode=="Admin"){
      this.loginService.loginAdmin(this.user.username,this.user.password).subscribe(
        data => {
          this.isAdmin=true;
          this.sharedService.setAdmin(this.isAdmin)

          this.isParent=false;
          this.sharedService.setParent(this.isParent)

          this.router.navigate(['/dashboard']);
        }, error => alert("Error login"));

    }
    else if(this.loginMode=="Parent"){
      this.loginService.loginParent(this.user.username,this.user.password).subscribe(
        data => {
          this.isAdmin=false;
          this.sharedService.setAdmin(this.isAdmin)

          this.isTeacher=false;
          this.sharedService.setTeacher(this.isTeacher)

          this.isStudent=false;
          this.sharedService.setStudent(this.isStudent)

          this.isParent=true;
          this.sharedService.setParent(this.isParent)

          console.log(data);
          this.router.navigate(['/dashboard']);

        }, error => alert("Error login"));

    }else if(this.loginMode=="Teacher"){
      this.loginService.loginTeacher(this.user.username,this.user.password).subscribe(
        data => {
          this.isAdmin=false
          this.sharedService.setAdmin(this.isAdmin)

          this.isStudent=false;
          this.sharedService.setStudent(this.isStudent)

          this.isTeacher=true;
          this.sharedService.setTeacher(this.isTeacher)

          this.isParent=false;
          this.sharedService.setParent(this.isParent)

          console.log(data);
          this.router.navigate(['/dashboard']);

        }, error => alert("Error login"));

    }
    else if(this.loginMode=="Student"){
      this.loginService.loginStudent(this.user.username,this.user.password).subscribe(
        data => {

          this.isAdmin=false;
          this.sharedService.setAdmin(this.isAdmin)

          this.isTeacher=false;
          this.sharedService.setTeacher(this.isTeacher)

          this.isStudent=true;
          this.sharedService.setStudent(this.isStudent)

          this.isParent=false;
          this.sharedService.setParent(this.isParent)

          console.log(data);
          this.router.navigate(['/dashboard']);

        }, error => alert("Error login"));

    }
    else {
      alert("Please select how do you want to login?")
    }


  }

  onClickForgotPassword() {



  }


}
