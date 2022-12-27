import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../../service.service";
import {Notice} from "../../notice";
import {Teacher} from "../../teacher";

@Component({
  selector: 'app-viewnotices',
  templateUrl: './viewnotices.component.html',
  styleUrls: ['./viewnotices.component.css']
})
export class ViewnoticesComponent implements OnInit{

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  notices:any=[]
  notices1:any=[]
  notice:Notice=new Notice()
  noticeData={

    id:"",
    title:"",
    description:"",
    date:"",
    teacher:Teacher

  }

  constructor(private service:ServiceService) {
  }
  ngOnInit() {
    this.getNotices()

  }

  getNotices(){
    this.service.getNotices().subscribe(
      data=>{
        console.log(data)
        this.notices=data
        this.notice.teacher=this.notices.teacher
        for (let i of this.notices){

          this.notice=i
          console.log(this.notice.title)

        }
      },err=>{
        console.log(err)
      }
    )
  }

}
