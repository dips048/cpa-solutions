import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnocentSpouseReliefComponent } from './innocent-spouse-relief.component';

describe('InnocentSpouseReliefComponent', () => {
  let component: InnocentSpouseReliefComponent;
  let fixture: ComponentFixture<InnocentSpouseReliefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnocentSpouseReliefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnocentSpouseReliefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
