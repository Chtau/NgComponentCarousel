import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ICarouselItem, CarouselComponent, CarouselHtml, ComponentType } from './carousel.model';
import { InternalCarouselItem } from './internal-carousel.model';
import { HostDirective } from './host-container.directive';
import { IComponentCarouselItem } from './containers/component/component-carousel-item.interface';
import { IHtmlCarouselItem } from './containers/html/html-carousel-item.interface';
import { ComponentCarouselItemContainerComponent } from './containers/component/carousel-item-container.component';
import { HtmlCarouselItemContainerComponent } from './containers/html/html-carousel-item-container.component';
import { Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'NgComponentCarousel',
  templateUrl: './ng-component-carousel.component.html',
  styleUrls: ['./ng-component-carousel.component.scss'],
})
export class NgComponentCarouselComponent implements OnInit {

  itemsCollection: ICarouselItem[] = [];
  internalItems: InternalCarouselItem[] = [];
  currentIndex: number = 0;
  intervalHandler: Subscription;
  pauseCarousel: boolean = false;
  intervalMS: number = 10000;

  @ViewChild(HostDirective, { static: true }) host: HostDirective;

  @Input()
  set items(val: ICarouselItem[]) {
    this.itemsCollection = val;
    this.onSetInternalItems();
  }

  @Input()
  set interval(val: number) {
    this.intervalMS = val;
    this.pauseCarousel = true;
    this.startCarousel();
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.startCarousel();
  }

  private onSetInternalItems():void {
    this.internalItems = [];
    if (this.itemsCollection) {
      this.itemsCollection.forEach((item: ICarouselItem) => {
        if (item.type == ComponentType.Component) {
          this.internalItems.push(
            {
              component: ComponentCarouselItemContainerComponent,
              model: <CarouselComponent>item
            });
        } else if (item.type == ComponentType.Html) {
          this.internalItems.push(
            {
              component: HtmlCarouselItemContainerComponent,
              model: <CarouselHtml>item
            });
        }
      });
    }
  }

  private loadComponent() {
    if (this.internalItems && this.internalItems.length > 0) {
      if (this.currentIndex > this.internalItems.length - 1) {
        this.currentIndex = 0;
      }
      const item = this.internalItems[this.currentIndex];

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
  
      const viewContainerRef = this.host.viewContainerRef;
      viewContainerRef.clear();
  
      const componentRef = viewContainerRef.createComponent(componentFactory);
      var instanceComponent = (<IComponentCarouselItem>componentRef.instance);
      if (instanceComponent) {
        instanceComponent.model = item.model as CarouselComponent;
      }
      var instanceHtml = (<IHtmlCarouselItem>componentRef.instance);
      if (instanceHtml) {
        instanceHtml.model = item.model as CarouselHtml;
      }
    }
  }

  private startCarousel() {   
    var interval = timer(this.intervalMS,this.intervalMS);
    this.intervalHandler = interval.subscribe(t => {
      if (this.pauseCarousel === false) {
        this.currentIndex++;
        if (this.internalItems) {
          if (this.currentIndex > this.internalItems.length - 1) {
            this.currentIndex = 0;
          }
        } else {
          this.currentIndex = 0;
        }
        this.loadComponent();
      }
    });
    this.pauseCarousel = false;
  }

  onPrevious():void {
    this.currentIndex--;
    this.loadComponent();
  }

  onNext():void {
    this.currentIndex++;
    this.loadComponent();
  }

  onMouseOver(event: MouseEvent): void {
    this.pauseCarousel = true;
  }

  onMouseOut(event: MouseEvent):void {
    this.pauseCarousel = false;
  }
}
