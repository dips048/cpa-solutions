import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationListModel } from '../../models';
import { DataService } from '../../services';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Output() closeDrawer = new EventEmitter();

  navigationList$: Observable<NavigationListModel[]>;

  constructor(
    private dataService: DataService
  ) {
    this.navigationList$ = this.dataService.getNavigationList();
  }

  ngOnInit(): void {
  }

}
