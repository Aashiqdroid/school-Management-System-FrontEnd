import {Component, OnInit} from '@angular/core';
import {Notice} from "../../notice";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ServiceService} from "../../service.service";
import {SharedService} from "../../shared/shared.service";

@Component({
  selector: 'app-parentnotices',
  templateUrl: './parentnotices.component.html',
  styleUrls: ['./parentnotices.component.css']
})
export class ParentnoticesComponent implements OnInit{

  notice:Notice=new Notice()
  noticeForm!:FormGroup

  constructor(private formbuilder:FormBuilder,
              private service:ServiceService,
              private sharedService:SharedService) {
  }


  addNotice() {
    this.service.addNotices(this.sharedService.getUserOb().username,this.notice).subscribe(
      data=>{
        console.log(data)
        this.noticeForm.reset()
      },err=>{
        console.log(err)
        this.noticeForm.reset()
      }
    )



  }

  ngOnInit(): void {
    this.noticeForm= this.formbuilder.group({
      title:new FormControl("",Validators.required),
      description:new FormControl("",Validators.required)
    })
  }
}
