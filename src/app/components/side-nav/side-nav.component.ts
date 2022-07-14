import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { NavListOneModel } from '../../models';
import { DataService } from '../../services';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Output() closeDrawer = new EventEmitter();

  navList$: Observable<NavListOneModel[]>;

  constructor(
    private dataService: DataService
  ) {
    this.navList$ = this.dataService.getNavListOne();
  }

  ngOnInit(): void {
  }

}
