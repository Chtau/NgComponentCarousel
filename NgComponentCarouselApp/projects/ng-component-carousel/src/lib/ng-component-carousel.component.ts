import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild, ComponentRef, ComponentFactory, ViewContainerRef, ViewRef } from '@angular/core';
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
  components: ComponentFactory<any>[] = [];
  viewContainerRef: ViewContainerRef = null;
  viewRefs: ViewRef[] = [];
  currentIndex: number = 0;
  intervalHandler: Subscription;
  pauseCarousel: boolean = false;
  intervalMS: number = 10000;
  internalHideButtonsOnHover: boolean = false;

  @ViewChild(HostDirective, { static: true }) host: HostDirective;

  @Input()
  set items(val: ICarouselItem[]) {
    this.itemsCollection = val;
    this.components = [];
    this.viewRefs = [];
    this.viewContainerRef = null;
    this.onSetInternalItems();
  }

  @Input()
  set interval(val: number) {
    this.intervalMS = val;
    this.pauseCarousel = true;
    this.startCarousel();
  }

  @Input()
  set hideButtonsOnHover(val: boolean) {
    this.internalHideButtonsOnHover = val;
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
      if (this.currentIndex < 0) {
        this.currentIndex = this.internalItems.length - 1;
      }
      const item = this.internalItems[this.currentIndex];
      if (!(this.components.length > this.currentIndex)) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
        this.components.push(componentFactory);
      }
      if (this.viewContainerRef == null) {
        this.viewContainerRef = this.host.viewContainerRef;
      }
      this.viewContainerRef.detach(0);
      if (!(this.viewRefs.length > this.currentIndex)) {
        const componentRef = this.viewContainerRef.createComponent(this.components[this.currentIndex]);
        var instanceComponent = (<IComponentCarouselItem>componentRef.instance);
        if (instanceComponent) {
          instanceComponent.model = item.model as CarouselComponent;
        }
        var instanceHtml = (<IHtmlCarouselItem>componentRef.instance);
        if (instanceHtml) {
          instanceHtml.model = item.model as CarouselHtml;
        }
        this.viewRefs.push(this.viewContainerRef.get(0));
      }
      this.viewContainerRef.insert(this.viewRefs[this.currentIndex]);
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
