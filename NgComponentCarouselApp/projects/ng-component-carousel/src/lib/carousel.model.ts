import { Type } from '@angular/core';

export interface ICarouselItem {

}

export class CarouselHtml implements ICarouselItem {
  constructor(public content: string) {
    
  }
}

export class CarouselComponent implements ICarouselItem {
  constructor(public component: Type<any>) {
    
  }
}