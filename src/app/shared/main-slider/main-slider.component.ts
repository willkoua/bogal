import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent {
  @Output() toggledMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  closeMenu(): void {
    this.toggledMenu.emit(false);
  }

}
