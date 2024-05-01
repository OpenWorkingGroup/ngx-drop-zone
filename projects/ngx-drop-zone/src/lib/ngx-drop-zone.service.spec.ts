import { TestBed } from '@angular/core/testing';

import { NgxDropZoneService } from './ngx-drop-zone.service';

describe('NgxDropZoneService', () => {
  let service: NgxDropZoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDropZoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
