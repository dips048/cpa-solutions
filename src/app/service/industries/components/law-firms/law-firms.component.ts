import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactUsDialogComponent } from '../../../../shared/components/contact-us-dialog/contact-us-dialog.component';

@Component({
  selector: 'app-law-firms',
  templateUrl: './law-firms.component.html',
  styleUrls: ['./law-firms.component.css']
})
export class LawFirmsComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void { }

  openContactUsDialog() {
    this.dialog.open(ContactUsDialogComponent, {
      width: '500px'
    });
  }

}
