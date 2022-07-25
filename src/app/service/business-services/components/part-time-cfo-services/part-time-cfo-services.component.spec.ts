import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartTimeCFOServicesComponent } from './part-time-cfo-services.component';

describe('PartTimeCFOServicesComponent', () => {
  let component: PartTimeCFOServicesComponent;
  let fixture: ComponentFixture<PartTimeCFOServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartTimeCFOServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartTimeCFOServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
