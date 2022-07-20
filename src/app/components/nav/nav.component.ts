import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubscribeDialogComponent } from '../../shared/components/subscribe-dialog/subscribe-dialog.component';
import { LoginDialogComponent } from '../../shared/components/login-dialog/login-dialog.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() desktopScreen = false;

  @Output() toggleDrawer = new EventEmitter();

  constructor(
    private matDilog: MatDialog
  ) { }

  ngOnInit(): void { }

  openLoginDialog(): void {
    this.matDilog.open(LoginDialogComponent, {
      width: '500px'
    })
  };

  openSubscribeDialog(): void {
    this.matDilog.open(SubscribeDialogComponent, {
      width: '500px'
    })
  };
}
