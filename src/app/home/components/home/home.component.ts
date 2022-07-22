import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { gsap } from 'gsap';
import { ContactUsDialogComponent } from '../../../shared/components/contact-us-dialog/contact-us-dialog.component';

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
    gsap.to(".globe-3", {rotation: 360, transformOrigin: "center", ease: "none", duration: 120, repeat: -1});
    gsap.to(".globe-4", {rotation: -360, transformOrigin: "center", ease: "none", duration: 120, repeat: -1});
    gsap.to(".img-scroll", {rotation: 360, transformOrigin: "center", ease: "none", duration: 80, repeat: -1});
    gsap.from("#home-page-tagline",{y: -200, opacity: 0, duration: 1})
    if(width > 767.98) {
      gsap.from("#img-woman-1", {x: 200, opacity: 0, duration: 1});
    } else {
      gsap.from("#img-woman-1", {opacity: 0, duration: 1});
    }
  };

  openContactUsDialog() {
    this.dialog.open(ContactUsDialogComponent, {
      width: '500px'
    });
  }
}
