import { TestBed } from '@angular/core/testing';

import { NgComponentCarouselService } from './ng-component-carousel.service';

describe('NgComponentCarouselService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgComponentCarouselService = TestBed.get(NgComponentCarouselService);
    expect(service).toBeTruthy();
  });
});
