import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubscribeDialogComponent } from '../../shared/components/subscribe-dialog/subscribe-dialog.component';
import { LoginDialogComponent } from '../../shared/components/login-dialog/login-dialog.component';
import { Observable } from 'rxjs/internal/Observable';
import { NavigationListModel } from '../../shared/models';
import { DataService } from '../../shared/services';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() desktopScreen = false;

  @Output() toggleDrawer = new EventEmitter();

  navigationList$: Observable<NavigationListModel[]>;

  constructor(
    private matDilog: MatDialog,
    private dataService: DataService
  ) {
    this.navigationList$ = this.dataService.getNavigationList();
  }

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
