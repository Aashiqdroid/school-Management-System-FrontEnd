import {Component, OnInit, ViewChild} from '@angular/core';
import {StudentService} from "../../student.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {MatButton} from "@angular/material/button";
import {Teacher} from "../../teacher";
import {Result} from "../../result";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

export interface UserData {
  id: String,
  address: String,
  age: String,
  guardianName: String,
  mobile: String,
  username: String,
  delete: MatButton,
  edit: MatButton,
  comment: MatButton,
  addResult: MatButton
}

@Component({
  selector: 'app-managestudents',
  templateUrl: './managestudents.component.html',
  styleUrls: ['./managestudents.component.css']
})

export class ManagestudentsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  result: Result = new Result()
  addResultForm!: FormGroup


  dataSource!: MatTableDataSource<UserData>
  displayedColumn: String[] = ['id', 'username', 'age', 'address', 'mobile', 'guardianName', 'delete', 'edit', 'comment', 'addResult'];
  fetchedStudents: any;

  itemToUpdate = {
    id: "",
    username: "",
    password: "",
    age: "",
    address: "",
    mobile: "",
    guardianName: "",
    teacherComment: "",
  }


  constructor(private studentService: StudentService, private formbuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.fetchAllStudents()

    this.addResultForm = this.formbuilder.group({
      maths: new FormControl("", Validators.required),
      science: new FormControl("", Validators.required),
      english: new FormControl("", Validators.required),
      id: new FormControl("", Validators.required)
    })
  }

  fetchAllStudents() {
    this.studentService.getAllStudents().subscribe(
      data => {
        console.log(data)
        this.fetchedStudents = data
        this.dataSource = new MatTableDataSource(this.fetchedStudents);
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort
      }, err => {
        console.log(err)
      }
    )

  }


  editItems(x: any) {
    this.itemToUpdate = x;
  }

  update() {
    this.studentService.updateStudent(this.itemToUpdate.id, this.itemToUpdate).subscribe(
      data => {
        console.log(this.itemToUpdate.teacherComment + " has been added to " + this.itemToUpdate.username)
      }, err => {
        console.log(err)
      }
    )
  }

  deleteStudent(row: any) {
    this.studentService.deleteStudent(row.id).subscribe(
      data => {
        console.log("Student with id " + row.id + " Has been deleted")
        this.fetchAllStudents()
      }, er => {
        console.log(er)
      }
    )

  }


  addResult(row: any) {
    this.itemToUpdate = row
  }

  addResultMethod() {
    console.log(this.itemToUpdate.id)
    this.studentService.addResult(this.itemToUpdate.id, this.result).subscribe(
      data => {
        console.log(data)
      }, err => {
        console.log(err)
      }
    )
  }
}
