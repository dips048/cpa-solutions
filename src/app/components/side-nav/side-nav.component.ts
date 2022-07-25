import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationListModel } from '../../shared/models';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Input() navigationList: NavigationListModel[] = []

  @Output() closeDrawer = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

}
