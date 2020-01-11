import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgComponentCarouselModule } from 'projects/ng-component-carousel/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgComponentCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
