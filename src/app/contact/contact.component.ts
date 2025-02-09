import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  constructor() {

  }

  ngOnInit(): void {

  }

  log(x: any) {
    console.log(x);
  }

  loginData: any = {};
  submitted: boolean = false;
  submitForm(form: NgForm, loginData: any) {

    if (form.valid) {
      console.log("Form Submitted", form.value);
      console.log("Login data", loginData)
      form.reset();
    }
    else {
      console.log("Form is invalid");
      this.submitted = true;

    }
  }
}
