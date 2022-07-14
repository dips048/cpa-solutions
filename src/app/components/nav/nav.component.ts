import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services';
import { NavListTwoModel } from '../../models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navList$: Observable<Array<NavListTwoModel>>;

  @Output() toggleDrawer = new EventEmitter();

  constructor(
    private dataService: DataService
  ) {
    this.navList$ = this.dataService.getNavListTwo();
  }

  ngOnInit(): void { }

}
