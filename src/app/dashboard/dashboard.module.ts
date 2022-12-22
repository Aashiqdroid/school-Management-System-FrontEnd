import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {RouterLinkWithHref, RouterModule, RouterOutlet} from "@angular/router";
import { AddrolesComponent } from './addroles/addroles.component';
import { AddteacherComponent } from './addroles/addteacher/addteacher.component';
import { AddparentComponent } from './addroles/addparent/addparent.component';
import { AddstudentComponent } from './addroles/addstudent/addstudent.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import { ManagestudentsComponent } from './managestudents/managestudents.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import { ChildreviewsComponent } from './childreviews/childreviews.component';
import {MatTabsModule} from "@angular/material/tabs";
import { ChildresultsComponent } from './childresults/childresults.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AddrolesComponent,
    AddteacherComponent,
    AddparentComponent,
    AddstudentComponent,
    ManagestudentsComponent,
    ChildreviewsComponent,
    ChildresultsComponent
  ],
    imports: [
        CommonModule,
        RouterLinkWithHref,
        RouterOutlet, RouterModule, ReactiveFormsModule, FormsModule, MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatSelectModule, MatTableModule, MatSortModule, MatPaginatorModule, MatTabsModule
    ],exports:[MatInputModule]
})
export class DashboardModule { }
