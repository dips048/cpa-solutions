import { Component, Input, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  @Input() heading = '';

  constructor() { }

  ngOnInit(): void {
    this.initAnimation();
  }

  initAnimation(): void {
    gsap.to(".globe-3", {rotation: 360, transformOrigin: "center", ease: "none", duration: 120, repeat: -1});
    gsap.to(".globe-4", {rotation: -360, transformOrigin: "center", ease: "none", duration: 120, repeat: -1});
    gsap.from("#header-1",{y: -100, opacity: 0, duration: 1});
  };
}
