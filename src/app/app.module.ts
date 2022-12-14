import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MatCard, MatCardActions, MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink, RouterModule, RouterOutlet, Routes} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {StarterComponent} from "./starter/starter.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StarterModule} from "./starter/starter.module";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {AuthComponent} from "./auth/auth.component";
import {LoginComponent} from "./auth/login/login.component";
import {AuthModule} from "./auth/auth.module";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AddrolesComponent} from "./dashboard/addroles/addroles.component";
import {DashboardModule} from "./dashboard/dashboard.module";
import {AddteacherComponent} from "./dashboard/addroles/addteacher/addteacher.component";
import {AddparentComponent} from "./dashboard/addroles/addparent/addparent.component";
import {AddstudentComponent} from "./dashboard/addroles/addstudent/addstudent.component";
import {ManagestudentsComponent} from "./dashboard/managestudents/managestudents.component";
import {ChildreviewsComponent} from "./dashboard/childreviews/childreviews.component";



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, children:[
      {path:'add-roles',component:AddrolesComponent,children:[
          {path:'add-teacher',component:AddteacherComponent},
          {path:'add-parent',component:AddparentComponent},
          {path:'add-student',component:AddstudentComponent}
        ]},
      {path:'manage-students',component:ManagestudentsComponent},
      {path:'child-reviews',component:ChildreviewsComponent}
    ]
    },

  {path: '', component: StarterComponent}
]


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,RouterOutlet,
    FormsModule,
    HttpClientModule,
    StarterModule, AuthModule, DashboardModule,
    MatToolbarModule,
    MatButtonModule, MatIconModule,
    MatTableModule, MatPaginatorModule,
    MatSortModule, MatFormFieldModule,
    MatInputModule,BrowserAnimationsModule,MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,ReactiveFormsModule,RouterModule


  ], exports: [RouterModule,MatInputModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
