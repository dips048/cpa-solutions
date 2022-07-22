import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ContactUsDialogComponent } from '../../../shared/components/contact-us-dialog/contact-us-dialog.component';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-employment-opportunities',
  templateUrl: './employment-opportunities.component.html',
  styleUrls: ['./employment-opportunities.component.css']
})
export class EmploymentOpportunitiesComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.initAnimation();
  }

  initAnimation(): void {
    // ScrollTrigger.create({
    //   trigger: '#image-container',
    //   start: 'top',
    //   end: 'bottom',
    //   pin: true,
    //   markers: true,
    // })
    gsap.to('#image-container', {
      scrollTrigger: {
        trigger: '.c-1',
        start: '#image-container top',
        end: "+=300 bottom",
        pin: true,
        markers: true,
      }
    });
  };

  openContactUsDialog() {
    this.dialog.open(ContactUsDialogComponent, {
      width: '500px'
    });
  };

}
