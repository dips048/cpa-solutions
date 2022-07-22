import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrsTaxFormsPublicationsComponent } from './irs-tax-forms-publications.component';

describe('IrsTaxFormsPublicationsComponent', () => {
  let component: IrsTaxFormsPublicationsComponent;
  let fixture: ComponentFixture<IrsTaxFormsPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrsTaxFormsPublicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IrsTaxFormsPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
