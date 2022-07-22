import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactUsDialogComponent } from '../../../shared/components/contact-us-dialog/contact-us-dialog.component';

@Component({
  selector: 'app-state-tax-forms',
  templateUrl: './state-tax-forms.component.html',
  styleUrls: ['./state-tax-forms.component.css']
})
export class StateTaxFormsComponent implements OnInit {

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
