import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us-dialog',
  templateUrl: './contact-us-dialog.component.html',
  styleUrls: ['./contact-us-dialog.component.css']
})
export class ContactUsDialogComponent implements OnInit {

  contactUsForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.contactUsForm = this.fb.group({
      name: [],
      email: [],
      phone: [9876543210, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
      comments: [],
    });
   }

  ngOnInit(): void {
  }

  send(formData: any) {
    console.log('formData:', formData);
  }
}
