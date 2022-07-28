import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovingRetirementComponent } from './improving-retirement.component';

describe('ImprovingRetirementComponent', () => {
  let component: ImprovingRetirementComponent;
  let fixture: ComponentFixture<ImprovingRetirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprovingRetirementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprovingRetirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
