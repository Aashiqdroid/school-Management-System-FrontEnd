import {Component, OnInit, ViewChild} from '@angular/core';
import {SharedService} from "../../shared/shared.service";
import {StudentService} from "../../student.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {UserData} from "../managestudents/managestudents.component";
import {Result} from "../../result";

@Component({
  selector: 'app-childresults',
  templateUrl: './childresults.component.html',
  styleUrls: ['./childresults.component.css']
})
export class ChildresultsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!:MatPaginator
  @ViewChild(MatSort) sort!:MatSort
  dataSource!: MatTableDataSource<UserData>
  displayedColumn: String[]=['id','username','viewResult'];
  fetchedData:any;
  fetchedResult:any;

  result:Result= new Result()
  result1:Result= new Result()

  studentResultToBeViewed = {
    id: "",
    username: ""
  }



  constructor(private sharedSerivce:SharedService,private studentService:StudentService) {

  }

  ngOnInit(): void {
    this.studentService.getStudentsOfParent(this.sharedSerivce.getParentOb().username).subscribe(
      data=>{console.log(data)
        this.fetchedData=data
        this.dataSource=new MatTableDataSource(this.fetchedData);
        this.dataSource.paginator=this.paginator
        this.dataSource.sort=this.sort
        this.result=this.result1
      },err=>{console.log(err)}
    )
  }

  showResult(row:any) {
    this.studentResultToBeViewed=row
    this.showResultOnModal()
  }
  showResultOnModal(){
    this.studentService.getExamResults(this.sharedSerivce.getParentOb().username,
      this.studentResultToBeViewed.username).subscribe(
        data=>{
          this.fetchedResult=data
          console.log(this.fetchedResult)
          for (let i of this.fetchedResult){
            console.log(i)
            this.result=i
          }
        }
        ,err=>{console.log(err)}
    );
    this.result=this.result1
  }
}
