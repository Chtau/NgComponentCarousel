import { Component, OnInit, ViewChild, ComponentFactoryResolver, Input } from '@angular/core';
import { HostDirective } from '../../host-container.directive';
import { CarouselComponent } from '../../carousel.model';
import { IComponentCarouselItem } from './component-carousel-item.interface';

@Component({
  selector: 'ComponentCarouselItemContainerComponent',
  templateUrl: './carousel-item-container.component.html',
  styleUrls: ['./carousel-item-container.component.scss'],
})
export class ComponentCarouselItemContainerComponent implements OnInit, IComponentCarouselItem {

  currentItem: CarouselComponent = new CarouselComponent(null);

  @ViewChild(HostDirective, { static: true }) host: HostDirective;

  @Input()
  set model(val: CarouselComponent) {
    this.currentItem = val;
  }
  get model() {
    return this.currentItem;
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    if (this.currentItem && this.currentItem.component) {
      this.loadComponent();
    }
  }

  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.currentItem.component);

    let viewContainerRef = this.host.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
  }

}
