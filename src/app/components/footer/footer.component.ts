import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { filter, Observable } from 'rxjs';
import { DataService } from '../../services';
import { NavigationListModel } from '../../models';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  resourceNavList$: Observable<NavigationListModel[]>;

  constructor(private dataService: DataService) {
    this.resourceNavList$ = this.dataService
      .getNavigationList()
      .pipe(filter((navList, i) => navList[i].title === 'Resources'));
  }

  ngOnInit(): void {
    this.initAnimation();
  }

  initAnimation() {
    gsap.from('#nl-container', {
      scrollTrigger: {
        trigger: '#nl-container',
      },
      opacity: 0,
      y: -200,
      duration: 2,
    });
    gsap.from('.footer-card', {
      scrollTrigger: {
        trigger: '.footer-card',
      },
      opacity: 0,
      scale: 0,
      duration: 2,
    });
  }
}
