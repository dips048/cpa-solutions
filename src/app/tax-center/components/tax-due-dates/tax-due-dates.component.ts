import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactUsDialogComponent } from '../../../shared/components/contact-us-dialog/contact-us-dialog.component';

@Component({
  selector: 'app-tax-due-dates',
  templateUrl: './tax-due-dates.component.html',
  styleUrls: ['./tax-due-dates.component.css']
})
export class TaxDueDatesComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.initAnimation();
  }

  initAnimation(): void {

  };

  openContactUsDialog() {
    this.dialog.open(ContactUsDialogComponent, {
      width: '500px'
    });
  };

}
