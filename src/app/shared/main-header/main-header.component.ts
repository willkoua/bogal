import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  animations: [
    fadeInOnEnterAnimation({ anchor: 'enter', duration: 1000, delay: 100, }),
    fadeOutOnLeaveAnimation({ anchor: 'leave', duration: 1000, delay: 100, })
  ]
})
export class MainHeaderComponent implements OnInit {
  @Output() activeMenu: EventEmitter<boolean> = new EventEmitter<boolean>();
  closeBtn = false;
  showBtn = true;
  showMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
    if (this.showMenu) {
      this.showBtn = false;
    } else {
      this.closeBtn = false;
    }
    this.activeMenu.emit(this.showMenu);
  }

  enterShowDone(event: AnimationEvent): void {
    // @ts-ignore
    if (event.toState !== 'void') {
      this.showBtn = true;
    }
  }

  leaveShowDone(event: AnimationEvent): void {
    // @ts-ignore
    if (event.toState === 'void') {
      this.closeBtn = true;
    }
  }

  enterCloseDone(event: AnimationEvent): void {
    // @ts-ignore
    if (event.toState !== 'void') {
      this.closeBtn = true;
    }
  }

  leaveCloseDone(event: AnimationEvent): void {
    // @ts-ignore
    if (event.toState === 'void') {
      this.showBtn = true;
    }
  }

}
