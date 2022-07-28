import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMortgageFGComponent } from './home-mortgage-fg.component';

describe('HomeMortgageFGComponent', () => {
  let component: HomeMortgageFGComponent;
  let fixture: ComponentFixture<HomeMortgageFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMortgageFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMortgageFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
