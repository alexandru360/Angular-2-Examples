import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-translate-something',
  templateUrl: './translate-something.component.html',
  styleUrls: ['./translate-something.component.css']
})
export class TranslateSomethingComponent implements OnInit {
  param = {value: 'world'};

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  ngOnInit() {
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
