import { Component } from '@angular/core';
import { ICarouselItem, CarouselHtml } from 'projects/ng-component-carousel/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  items: ICarouselItem[] = [
    new CarouselHtml("<p>Hello</p>"),
    new CarouselHtml("<p>World</p>"),
  ];

}
