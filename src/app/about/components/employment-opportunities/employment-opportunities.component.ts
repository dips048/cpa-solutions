import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { gsap } from 'gsap';
import { ContactUsDialogComponent } from '../../../shared/components/contact-us-dialog/contact-us-dialog.component';

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
    gsap.to('#image-container', {
      scrollTrigger: {
        trigger: '#image-container',
        start: '#image-container',
        pin: true,
      }
    });
  };

  openContactUsDialog() {
    this.dialog.open(ContactUsDialogComponent, {
      width: '500px'
    });
  };

}