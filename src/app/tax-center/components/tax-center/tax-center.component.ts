import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { gsap } from 'gsap';
import { ContactUsDialogComponent } from '../../../shared/components/contact-us-dialog/contact-us-dialog.component';

@Component({
  selector: 'app-tax-center',
  templateUrl: './tax-center.component.html',
  styleUrls: ['./tax-center.component.css']
})
export class TaxCenterComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    // this.initAnimation();
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
