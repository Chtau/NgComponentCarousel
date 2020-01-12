import { NgModule } from '@angular/core';
import { NgComponentCarouselComponent } from './ng-component-carousel.component';
import { HostDirective } from './host-container.directive';
import { ComponentCarouselItemContainerComponent } from './containers/component/carousel-item-container.component';
import { HtmlCarouselItemContainerComponent } from './containers/html/html-carousel-item-container.component';
import { SafePipe } from './safe.pipe';
import { MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    HostDirective,
    NgComponentCarouselComponent,
    ComponentCarouselItemContainerComponent,
    HtmlCarouselItemContainerComponent,
    SafePipe
  ],
  entryComponents: [
    ComponentCarouselItemContainerComponent,
    HtmlCarouselItemContainerComponent
  ],
  imports: [
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    HostDirective,
    SafePipe
  ],
  exports: [NgComponentCarouselComponent]
})
export class NgComponentCarouselModule { }
