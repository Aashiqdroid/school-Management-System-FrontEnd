import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Parent} from "../../../parent";
import {AddrolesService} from "../../../addroles.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addparent',
  templateUrl: './addparent.component.html',
  styleUrls: ['./addparent.component.css']
})
export class AddparentComponent implements OnInit{
  parentForm!:FormGroup
  parent:Parent=new Parent()

  constructor(private addrolesService: AddrolesService,
              private router: Router,
              private formbuilder:FormBuilder) {
  }

  ngOnInit(): void {
    this.parentForm= this.formbuilder.group({
      username:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required),
      mobile:new FormControl("",Validators.required),
      age:new FormControl("",Validators.required),
      address:new FormControl("",Validators.required),
      relationshipWithChild:new FormControl("",Validators.required),

    })
  }


  parentRegistration() {

    this.addrolesService.registerParent(this.parent).subscribe(
      data=>{

        console.log("Parent Registration success")
        this.parentForm.reset()

      },error => {
        alert("Error")
      }
    )



  }
}
