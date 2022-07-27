import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyersFGComponent } from './lawyers-fg.component';

describe('LawyersFGComponent', () => {
  let component: LawyersFGComponent;
  let fixture: ComponentFixture<LawyersFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyersFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyersFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
