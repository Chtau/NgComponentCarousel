import { Component } from '@angular/core';
import { ICarouselItem, CarouselHtml } from 'projects/ng-component-carousel/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  items: ICarouselItem[] = [
    //new CarouselHtml("<p>Hello</p>"),
    //new CarouselHtml("<p>World</p>"),
    new CarouselHtml('<img style="height: 300px;width: 600px;" src="https://4.bp.blogspot.com/-5D9uNXTAxQE/TdPJBlJfaBI/AAAAAAAAAYc/xgWw3kIqgSQ/s1600/Fiji+islands+%25E2%2580%2593+Come+to+Paradise.jpg"/>'),
    new CarouselHtml('<img style="height: 300px;width: 600px;" src="https://www.bing.com/th?id=OIP.v7zvwP_9OesPz6ZgSHGpHgHaDt&pid=Api&rs=1"/>'),
    new CarouselHtml('<img style="height: 300px;width: 600px;" src="https://i.ytimg.com/vi/227c2GseshI/maxresdefault.jpg"/>'),
  ];

}
