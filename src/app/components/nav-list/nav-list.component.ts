import { Component, Input, OnInit } from '@angular/core';
import { NavigationListModel } from '../../shared/models';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit {

  @Input() navigationList: NavigationListModel[] = []

  constructor() { }

  ngOnInit(): void { }

}
