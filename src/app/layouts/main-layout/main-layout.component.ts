import {Component, OnInit} from '@angular/core';
import {
  bounceInOnEnterAnimation,
  bounceOutOnLeaveAnimation,
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation
} from 'angular-animations';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  animations: [
    fadeInOnEnterAnimation({ anchor: 'enter', duration: 1000, delay: 100, }),
    fadeOutOnLeaveAnimation({ anchor: 'leave', duration: 1000, delay: 100, }),
    bounceInOnEnterAnimation({ anchor: 'bounceEnter', duration: 1000, delay: 100 }),
    bounceOutOnLeaveAnimation({ anchor: 'bounceLeave', duration: 1000, delay: 100 }),
  ]
})
export class MainLayoutComponent {
  showMenu = false;
  enableLink = false;
  enableMenu = false;

  constructor() { }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
    if (this.showMenu) {
      this.enableMenu = true;
    } else {
      this.enableLink = false;
      this.enableMenu = false;
    }
  }

  enterMenuDone(event: AnimationEvent): void {
    // @ts-ignore
    if (event.toState !== 'void') {
      this.enableLink = true;
    }
  }

  leaveMenuDone(event: AnimationEvent): void {
    // @ts-ignore
    if (event.toState === 'void') {
      this.enableLink = false;
    }
  }
}
