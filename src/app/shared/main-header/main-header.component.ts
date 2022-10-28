import {Component, EventEmitter, HostListener, Inject, OnInit, Output} from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import {DOCUMENT} from '@angular/common';
import {Const} from '../../../environments/const';
import {I18nService} from '../../core/services/i18n.service';

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
  currentLang: string;
  fr = Const.app.lang.fr;
  en = Const.app.lang.en;

  constructor(
    @Inject(DOCUMENT) document,
    private i18nService: I18nService
  ) { }

  ngOnInit(): void {
    this.currentLang = this.i18nService.language;
  }

  toggleLang(lang: string): void {
    console.log("eeeee");
    this.currentLang = lang;
    console.log(this.currentLang);

    this.i18nService.language = lang;
    this.currentLang = lang;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e): void {
    if (window.pageYOffset > 150) {
      const element = document.getElementById('header');
      element.classList.add('header-sticky');
    } else {
      const element = document.getElementById('header');
      element.classList.remove('header-sticky');
    }
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
