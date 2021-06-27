import { Component } from '@angular/core';
import {studentcrud} from  './studentcrud';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'serviceclass';
  value:boolean=false;
  students:studentcrud[]=[
    {rollno:1272,name:"Ganesh",email:"Ganesh@gmail.com",branch:"IT"}, 
    {rollno:1293,name:"SaiTeja",email:"Teju@gmail.com",branch:"IT"},
    {rollno:1270,name:"Dheeraj",email:"Dheeraj@gmail.com",branch:"IT"},
    {rollno:1266,name:"Bhanu",email:"Bhanu_Buffer@gmail.com",branch:"IT"}
  ]
  rollno=0;
  name="";
  email="";
  branch="";
  add()
  {
    this.students.push(
      {rollno:this.rollno,name:this.name,email:this.email,branch:this.branch}
    )
    this.value=false
  }
  delete(j:any)
  {
    this.students.splice(j,1);
  }
}
