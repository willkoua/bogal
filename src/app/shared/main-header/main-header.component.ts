import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  @Output() activeMenu: EventEmitter<boolean> = new EventEmitter<boolean>();
  showMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
    this.activeMenu.emit(this.showMenu);
  }
}
