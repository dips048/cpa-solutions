import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ContactUsDialogComponent } from '../../../../../shared/components/contact-us-dialog/contact-us-dialog.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-irs-audit-representation',
  templateUrl: './irs-audit-representation.component.html',
  styleUrls: ['./irs-audit-representation.component.css']
})
export class IRSAuditRepresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
