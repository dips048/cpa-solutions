import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceForIndividualsComponent } from './service-for-individuals.component';

describe('ServiceForIndividualsComponent', () => {
  let component: ServiceForIndividualsComponent;
  let fixture: ComponentFixture<ServiceForIndividualsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceForIndividualsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceForIndividualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
