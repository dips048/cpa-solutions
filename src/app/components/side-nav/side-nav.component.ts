import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  }

}
