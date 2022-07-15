import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() desktopScreen = false;

  @Output() toggleDrawer = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

}
