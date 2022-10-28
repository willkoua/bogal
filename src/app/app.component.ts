import {Component, OnInit} from '@angular/core';
import {Const} from '../environments/const';
import {I18nService} from './core/services/i18n.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'bogal';

  constructor(
    private i18nService: I18nService
  ) {}

  ngOnInit(): void {
    // Setup translations
    const defaultLang = localStorage.getItem(Const.app.lang.localstorage_title);
    this.i18nService.init(
      defaultLang ? defaultLang : Const.app.lang.fr,
      [
        Const.app.lang.fr,
        Const.app.lang.en
      ]
    );
  }
}
