import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { filter, Observable } from 'rxjs';
import { DataService } from '../../shared/services';
import { NavigationListModel } from '../../shared/models';

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
    gsap.from('.footer-card-1', {
      scrollTrigger: {
        trigger: '.footer-card-1',
        start: '.footer-card-1 center',
      },
      opacity: 0,
      scale: 0,
      duration: 2,
    })
    gsap.from('.footer-card-2', {
      scrollTrigger: {
        trigger: '.footer-card-2',
        start: '.footer-card-2 center',
      },
      opacity: 0,
      scale: 0,
      duration: 2,
    })
    gsap.from('.footer-card-3', {
      scrollTrigger: {
        trigger: '.footer-card-3',
        start: '.footer-card-3 center',
      },
      opacity: 0,
      scale: 0,
      duration: 2,
    })
    gsap.from('#nl-container', {
      scrollTrigger: {
        trigger: '#nl-container',
        start: '.#nl-container center',
      },
      opacity: 0,
      y: -200,
      duration: 2,
    });
  }
}
