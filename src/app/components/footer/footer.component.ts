import { Component, OnInit } from '@angular/core';
import { gsap, Sine } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { filter, map, Observable } from 'rxjs';
import { DataService } from '../../services';
import { NavigationListModel } from '../../models';

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  resourceNavList$: Observable<NavigationListModel[]>;

  constructor(
    private dataService: DataService
  ) {
    this.resourceNavList$ = this.dataService.getNavigationList().pipe(
      filter((navList, i) => navList[i].title === 'Resources'),
    );
   }

  ngOnInit(): void {
    this.initAnimation();
  }

  initAnimation() {
    gsap.from('#container-2', {
      scrollTrigger: {
        trigger: "#container-2",
        endTrigger: "#container-3",
        end: "bottom 50%+=100px",
      }, opacity: 0, y: -200, duration: 1});
  }
}
