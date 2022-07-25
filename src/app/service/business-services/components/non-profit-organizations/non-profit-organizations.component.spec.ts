import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonProfitOrganizationsComponent } from './non-profit-organizations.component';

describe('NonProfitOrganizationsComponent', () => {
  let component: NonProfitOrganizationsComponent;
  let fixture: ComponentFixture<NonProfitOrganizationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonProfitOrganizationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonProfitOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
