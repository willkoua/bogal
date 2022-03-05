import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {
  @Output() toggledMenu: EventEmitter<boolean> = new EventEmitter<boolean>();
  showMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.toggledMenu.emit(this.showMenu);
  }

}
