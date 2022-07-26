import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactUsDialogComponent } from '../../../../shared/components/contact-us-dialog/contact-us-dialog.component';


@Component({
  selector: 'app-audits-reviews-compilations',
  templateUrl: './audits-reviews-compilations.component.html',
  styleUrls: ['./audits-reviews-compilations.component.css']
})
export class AuditsReviewsCompilationsComponent implements OnInit {

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
