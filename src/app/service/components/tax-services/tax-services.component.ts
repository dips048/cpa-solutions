import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactUsDialogComponent } from '../../../shared/components/contact-us-dialog/contact-us-dialog.component';

@Component({
  selector: 'app-tax-services',
  templateUrl: './tax-services.component.html',
  styleUrls: ['./tax-services.component.css']
})
export class TaxServicesComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.initAnimation();
  }

  initAnimation(): void {

  }

  openContactUsDialog() {
    this.dialog.open(ContactUsDialogComponent, {
      width: '500px'
    });
  }

}
