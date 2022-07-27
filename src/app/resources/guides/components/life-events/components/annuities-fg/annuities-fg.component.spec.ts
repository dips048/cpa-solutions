import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuitiesFGComponent } from './annuities-fg.component';

describe('AnnuitiesFGComponent', () => {
  let component: AnnuitiesFGComponent;
  let fixture: ComponentFixture<AnnuitiesFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnuitiesFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnuitiesFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
