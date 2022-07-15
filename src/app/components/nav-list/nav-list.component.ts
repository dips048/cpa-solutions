import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationListModel } from 'src/app/models';
import { DataService } from '../../services';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit {

  navigationList$: Observable<NavigationListModel[]>;

  constructor(
    private dataService: DataService
  ) {
    this.navigationList$ = this.dataService.getNavigationList();
  }

  ngOnInit(): void {
  }

}
