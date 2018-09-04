import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormserviceService } from '../formservice.service';

@Component({
  selector: 'app-viewformdata',
  templateUrl: './viewformdata.component.html',
  styleUrls: ['./viewformdata.component.css']
})

export class ViewformdataComponent implements OnInit {
  show: any;
  employeedata: any;
  constructor(private formservice: FormserviceService, private routes: Router) {
    this.formservice.getMethod("getEmpData").subscribe(res => {
      this.employeedata = res;

    },
      error => {
        console.log(error);
      });

  }
  ngOnInit() {

  }

  backtoedit() {
    this.routes.navigate(["/editdata"]);
  }
}