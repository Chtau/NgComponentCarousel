import { Type } from '@angular/core';
import { ICarouselItem } from './carousel.model';

export class InternalCarouselItem {
  component: Type<any>;
  model: ICarouselItem;
}