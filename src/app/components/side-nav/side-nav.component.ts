import { Component, Input, OnInit } from '@angular/core';
import { NavigationListModel } from '../../shared/models';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Input() navigationList: NavigationListModel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.navigationList = this.navigationList.map(item => {
      if(item.list && item.list.length) {
        item.list = item.list.map(j => {
          j.routerLink = item.routerLink + j.routerLink
          return j
        })
      }
      return item
    })
  }

}
