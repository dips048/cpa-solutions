import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactUsDialogComponent } from '../../../shared/components/contact-us-dialog/contact-us-dialog.component';

@Component({
  selector: 'app-record-retention-guide',
  templateUrl: './record-retention-guide.component.html',
  styleUrls: ['./record-retention-guide.component.css']
})
export class RecordRetentionGuideComponent implements OnInit {

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
