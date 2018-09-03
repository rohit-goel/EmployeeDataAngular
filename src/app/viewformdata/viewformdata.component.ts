import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormserviceService } from '../formservice.service';

@Component({
  selector: 'app-viewformdata',
  templateUrl: './viewformdata.component.html',
  styleUrls: ['./viewformdata.component.css']
})

export class ViewformdataComponent implements OnInit {
  show:any;
  employeedata:any=[];
  alldata:any=[];
  constructor(private formservice: FormserviceService, private routes: Router) {
  }
  ngOnInit() {
    this,this.formservice.getMethod("getEmpData").subscribe(res => {
      this.employeedata.push(res);
      this.alldata = JSON.parse(JSON.stringify(this.employeedata));
    },
    error => {
      console.log(error);
    });
    
  }

  backtoedit() {
    this.routes.navigate(["/editdata"]);
  }
}