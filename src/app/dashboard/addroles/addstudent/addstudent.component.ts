import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Student} from "../../../student";
import {AddrolesService} from "../../../addroles.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent {
  studentForm!: FormGroup
  student: Student = new Student()
  teacherName: any
  parentName: any

  constructor(private addrolesService: AddrolesService,
              private router: Router,
              private formbuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.studentForm = this.formbuilder.group({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      mobile: new FormControl("", Validators.required),
      age: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      teacherName: new FormControl("", Validators.required),
      parentName: new FormControl("", Validators.required)

    })
  }
  studentREgistration() {
    // this.addrolesService.setParentAndTeacherWithStudent(this.teacherName,
    //   this.parentName, this.student).subscribe(
    //   data => {
    //     console.log(data)
    //     this.studentForm.reset()
    //   }, err => {
    //     console.log(err)
    //   }
    // )
    this.addrolesService.addListOfStudentsToTeaacher(this.teacherName,this.student.guardianName,this.student).subscribe(
      data=>{

        console.log(data)
        this.studentForm.reset()
      }, err => {
        console.log(err)
      }
    )
  }
}
