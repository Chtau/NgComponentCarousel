import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgComponentCarouselComponent } from './ng-component-carousel.component';

describe('NgComponentCarouselComponent', () => {
  let component: NgComponentCarouselComponent;
  let fixture: ComponentFixture<NgComponentCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgComponentCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgComponentCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
