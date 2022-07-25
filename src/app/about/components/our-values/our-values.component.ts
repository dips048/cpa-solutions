import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ContactUsDialogComponent } from '../../../shared/components/contact-us-dialog/contact-us-dialog.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-our-values',
  templateUrl: './our-values.component.html',
  styleUrls: ['./our-values.component.css']
})
export class OurValuesComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.initAnimation();
  }

  initAnimation(): void {
    gsap.to('#image-container-2', {
      scrollTrigger: {
        trigger: '#image-container-1',
        start: "top top",
        end: "bottom 50%+=140px",
        pin: true,
        markers: true,
        pinSpacing: false
      }
    });
  };

  openContactUsDialog() {
    this.dialog.open(ContactUsDialogComponent, {
      width: '500px'
    });
  };

}
