import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MissingTranslationHandler, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {BsDropdownModule, ModalModule, TooltipModule} from 'ngx-bootstrap';
import {TranslateSomethingComponent} from './translate-something/translate-something.component';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MyMissingTranslationHandler} from './my-missing-translation-handler';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [TranslateSomethingComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    // TranslateModule.forRoot({
    //   missingTranslationHandler: {
    //     provide: MissingTranslationHandler,
    //     useClass: MyMissingTranslationHandler
    //   },
    //   useDefaultLang: false
    // }),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [
    BsDropdownModule,
    TooltipModule,
    ModalModule]
})

export class TranslateExampleModule { }
