import { Type } from '@angular/core';

export enum ComponentType {
  Html,
  Component
}

export interface ICarouselItem {
  type: ComponentType;
}

export class CarouselHtml implements ICarouselItem {
  type = ComponentType.Html;
  constructor(public content: string) {
    
  }
}

export class CarouselComponent implements ICarouselItem {
  type = ComponentType.Component;
  constructor(public component: Type<any>) {
    
  }
}