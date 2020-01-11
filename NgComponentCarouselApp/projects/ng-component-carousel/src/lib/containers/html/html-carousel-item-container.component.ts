import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { CarouselHtml } from '../../carousel.model';
import { IHtmlCarouselItem } from './html-carousel-item.interface';

@Component({
  selector: 'HtmlCarouselItemContainerComponent',
  templateUrl: './html-carousel-item-container.component.html',
  styleUrls: ['./html-carousel-item-container.component.scss'],
  //encapsulation: ViewEncapsulation.
})
export class HtmlCarouselItemContainerComponent implements OnInit, IHtmlCarouselItem {

  currentItem: CarouselHtml = new CarouselHtml(null);

  @Input()
  set model(val: CarouselHtml) {
    this.currentItem = val;
  }
  get model() {
    return this.currentItem;
  }

  get content() {
    if (this.currentItem && this.currentItem.content) {
      return this.currentItem.content;
    }
    return null;
  }

  constructor() { }

  ngOnInit() {
    if (this.currentItem && this.currentItem.content) {
      
    }
  }

}
