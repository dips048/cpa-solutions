import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovingCreditComponent } from './improving-credit.component';

describe('ImprovingCreditComponent', () => {
  let component: ImprovingCreditComponent;
  let fixture: ComponentFixture<ImprovingCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprovingCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprovingCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
