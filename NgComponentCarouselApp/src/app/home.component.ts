import { Component } from '@angular/core';
import { ICarouselItem, CarouselHtml, CarouselComponent } from 'projects/ng-component-carousel/src/public-api';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  items: ICarouselItem[] = [
    new CarouselHtml('<img width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Monet_-_Monets_Garten_in_Giverny.jpg/350px-Monet_-_Monets_Garten_in_Giverny.jpg"/><div style="position: absolute;top: 0;left: 0;color: whitesmoke;font-weight: bold;margin: 15px;" class="text-wrapper"><span class="title">Monets Garten</span></div>'),
    new CarouselHtml('<img width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Prunus_sargentii.JPG/220px-Prunus_sargentii.JPG"/><div style="position: absolute;top: 0;left: 0;color: whitesmoke;font-weight: bold;margin: 15px;" class="text-wrapper"><span class="title">Prunus sargentii</span></div>'),
    new CarouselHtml('<img width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Cerisier_du_Japon_Prunus_serrulata.jpg/300px-Cerisier_du_Japon_Prunus_serrulata.jpg"/><div style="position: absolute;top: 0;left: 0;color: whitesmoke;font-weight: bold;margin: 15px;" class="text-wrapper"><span class="title">Cerisier du Japon</span></div>'),
  ];

  /*items: ICarouselItem[] = [
    //new CarouselHtml("<p>Hello</p>"),
    //new CarouselHtml("<p>World</p>"),
    new CarouselHtml('<img style="height: 300px;width: 600px;" src="https://4.bp.blogspot.com/-5D9uNXTAxQE/TdPJBlJfaBI/AAAAAAAAAYc/xgWw3kIqgSQ/s1600/Fiji+islands+%25E2%2580%2593+Come+to+Paradise.jpg"/>'),
    new CarouselHtml('<img style="height: 300px;width: 600px;" src="https://www.bing.com/th?id=OIP.v7zvwP_9OesPz6ZgSHGpHgHaDt&pid=Api&rs=1"/>'),
    new CarouselHtml('<img style="height: 300px;width: 600px;" src="https://i.ytimg.com/vi/227c2GseshI/maxresdefault.jpg"/>'),
  ];*/

}
