import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services';
import { LinkModel } from '../../models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  links$: Observable<Array<LinkModel>>;

  constructor(
    private dataService: DataService
  ) {
    this.links$ = this.dataService.getNavigationData();
  }

  ngOnInit(): void { }

}
