import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactUsDialogComponent } from '../../../../shared/components/contact-us-dialog/contact-us-dialog.component';
@Component({
  selector: 'app-financial-planning-for-businesses',
  templateUrl: './financial-planning-for-businesses.component.html',
  styleUrls: ['./financial-planning-for-businesses.component.css']
})
export class FinancialPlanningForBusinessesComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void { }

  openContactUsDialog() {
    this.dialog.open(ContactUsDialogComponent, {
      width: '500px'
    });
  };

}
