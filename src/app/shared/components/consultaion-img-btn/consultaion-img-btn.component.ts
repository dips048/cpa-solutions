import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactUsDialogComponent } from '../contact-us-dialog/contact-us-dialog.component';

@Component({
  selector: 'app-consultaion-img-btn',
  templateUrl: './consultaion-img-btn.component.html',
  styleUrls: ['./consultaion-img-btn.component.css']
})
export class ConsultaionImgBtnComponent implements OnInit {

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
