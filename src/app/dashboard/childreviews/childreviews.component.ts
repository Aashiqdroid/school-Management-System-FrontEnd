import {Component, OnInit, ViewChild} from '@angular/core';
import {SharedService} from "../../shared/shared.service";
import {TeacherService} from "../../teacher.service";
import {MatButton} from "@angular/material/button";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {UserData} from "../managestudents/managestudents.component";
export interface TeacherCommentData{
  id:String,
  username:String,
  teacherComment:String
}

@Component({
  selector: 'app-childreviews',
  templateUrl: './childreviews.component.html',
  styleUrls: ['./childreviews.component.css']
})
export class ChildreviewsComponent implements OnInit{
  constructor(private sharedSerivce:SharedService,private teacherService:TeacherService) {
  }
  @ViewChild(MatPaginator) paginator!:MatPaginator
  @ViewChild(MatSort) sort!:MatSort

  dataSource!: MatTableDataSource<UserData>
  displayedColumn: String[]=['id','username','teacherComment'];
  fetchedComments:any;

  ngOnInit(): void {
    this.teacherService.getTeacherComments(this.sharedSerivce.getParentOb().username).subscribe(
      data=>{
        console.log(data)
        this.fetchedComments=data
        this.dataSource=new MatTableDataSource(this.fetchedComments);
        this.dataSource.paginator=this.paginator
        this.dataSource.sort=this.sort
      },err=>{
        console.log(err)
      }
    )



  }

}
