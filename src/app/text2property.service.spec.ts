/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Text2propertyService } from './text2property.service';

describe('Text2propertyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Text2propertyService]
    });
  });

  it('should ...', inject([Text2propertyService], (service: Text2propertyService) => {
    expect(service).toBeTruthy();
  }));
});
