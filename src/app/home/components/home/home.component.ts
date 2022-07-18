import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { gsap } from 'gsap';
import { ContactUsDialogComponent } from '../contact-us-dialog/contact-us-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.initAnimation(window.innerWidth);
  }

  initAnimation(width: number) {
    // gsap.fromTo("#home-page-tagline", {y: -200, x: -180}, {y: 0, x: -180, opacity: 1, duration: 1});
    gsap.from("#home-page-tagline",{y: -200, opacity: 0, duration: 1})
    if(width > 736) {
      gsap.from("#img-woman-1", {x: 200, opacity: 0, duration: 1});
    } else {
      gsap.fromTo("#img-woman-1", {x:0}, {x: 50, opacity: 1, duration: 1});
    }
  };

  openContactUsDialog() {
    this.dialog.open(ContactUsDialogComponent, {
      width: '500px'
    });
  }
}
