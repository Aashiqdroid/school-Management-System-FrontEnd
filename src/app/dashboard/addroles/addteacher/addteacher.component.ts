import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Teacher} from "../../../teacher";
import {LoginService} from "../../../login.service";
import {Router} from "@angular/router";
import {AddrolesService} from "../../../addroles.service";

@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css']
})
export class AddteacherComponent implements OnInit{

  teacherForm!:FormGroup
  teacher:Teacher=new Teacher()
  constructor(private addrolesService: AddrolesService,
              private router: Router,
              private formbuilder:FormBuilder) {
  }

  teacherREgistration() {

    if (this.teacher.username != null && this.teacher.password != null && this.teacher.mobile != null &&
      this.teacher.subjectTaken != null ){

      this.addrolesService.registerTeacher(this.teacher).subscribe(
        data=>{

          console.log("Registration success");
          this.teacherForm.reset()

        },error => {
          alert("Error")
        }
      )



    }
    else {
      alert("please all fields")
    }

  }
  ngOnInit(): void {
    this.teacherForm= this.formbuilder.group({
      username:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required),
      mobile:new FormControl("",Validators.required),
      subjectTaken:new FormControl("",Validators.required),

    })
  }
}
