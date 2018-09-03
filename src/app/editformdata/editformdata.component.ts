import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormserviceService } from '../formservice.service';

@Component({
  selector: 'app-editformdata',
  templateUrl: './editformdata.component.html',
  styleUrls: ['./editformdata.component.css']
})
export class EditformdataComponent implements OnInit {
  loginForm: FormGroup
  data;
  passvalidation = "";

  loginform() {
    this.data = this.loginForm.value;
    this.formservice.setMethod('saveEmpData',this.data).subscribe(res =>{
      console.log(res);
      this.routes.navigate(["/viewdata"]);
    },
  error =>{
    alert(error);
  })
    // this.formservice.setMethod(this.data);
    
  }

  pass = "pass";

  showpass() {
    this.pass = "text";
  }
  hidepass() {
    this.pass = "pass";
  }

  constructor(private formservice: FormserviceService, private routes: Router) {
    this.loginForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4)]),
      emailId: new FormControl('', [Validators.required, Validators.email]),
      phoneNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
      gender: new FormControl('', [Validators.required, Validators.pattern('[m/f/o/M/F/O ]*')]),
      empId: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)])
    });

  }
  ngOnInit() {
  }
}
