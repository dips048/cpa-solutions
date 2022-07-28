import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorIllnessComponent } from './major-illness.component';

describe('MajorIllnessComponent', () => {
  let component: MajorIllnessComponent;
  let fixture: ComponentFixture<MajorIllnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajorIllnessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorIllnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
