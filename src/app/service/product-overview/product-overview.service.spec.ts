import { TestBed, inject } from '@angular/core/testing';

import { ProductOverviewService } from './product-overview.service';

describe('ProductOverviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductOverviewService]
    });
  });

  it('should be created', inject([ProductOverviewService], (service: ProductOverviewService) => {
    expect(service).toBeTruthy();
  }));
});
