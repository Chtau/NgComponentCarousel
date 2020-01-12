import { NgModule } from '@angular/core';
import { NgComponentCarouselComponent } from './ng-component-carousel.component';
import { HostDirective } from './host-container.directive';
import { ComponentCarouselItemContainerComponent } from './containers/component/carousel-item-container.component';
import { HtmlCarouselItemContainerComponent } from './containers/html/html-carousel-item-container.component';
import { SafePipe } from './safe.pipe';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    HostDirective,
    NgComponentCarouselComponent,
    ComponentCarouselItemContainerComponent,
    HtmlCarouselItemContainerComponent,
    SafePipe,
    MatButtonModule
  ],
  entryComponents: [
    ComponentCarouselItemContainerComponent,
    HtmlCarouselItemContainerComponent
  ],
  imports: [
  ],
  providers: [
    HostDirective,
    SafePipe
  ],
  exports: [NgComponentCarouselComponent]
})
export class NgComponentCarouselModule { }
