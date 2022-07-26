import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ContactUsDialogComponent } from '../../../../../shared/components/contact-us-dialog/contact-us-dialog.component';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-tax-relief',
  templateUrl: './tax-relief.component.html',
  styleUrls: ['./tax-relief.component.css']
})
export class TaxReliefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
