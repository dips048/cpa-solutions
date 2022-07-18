import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-subscribe-dialog',
  templateUrl: './subscribe-dialog.component.html',
  styleUrls: ['./subscribe-dialog.component.css']
})
export class SubscribeDialogComponent implements OnInit {

  subscribeForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.subscribeForm = this.fb.group({
      email: []
    });
   }

  ngOnInit(): void {
  }

  subscribe(formData: any) {
    console.log('subscribe Data:', formData);
    this
  }

}
