import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { MatDialog } from '@angular/material/dialog';
import { ContactUsDialogComponent } from '../../../shared/components/contact-us-dialog/contact-us-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.initAnimation();
  }

  initAnimation(): void {
    gsap.from("#header-1",{y: -100, opacity: 0, duration: 1})
  };

  openContactUsDialog() {
    this.dialog.open(ContactUsDialogComponent, {
      width: '500px'
    });
  };
}
