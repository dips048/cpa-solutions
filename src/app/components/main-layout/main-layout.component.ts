import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  @ViewChild('drawer') public drawer: MatDrawer | undefined;
  public desktopScreen: boolean;

  constructor() {
    this.desktopScreen = window.innerWidth > 736;
    console.log("screenWidth", window.innerWidth);
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.desktopScreen = window.innerWidth > 736;
    console.log("screenWidth", window.innerWidth);
  }
}
