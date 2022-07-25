import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingQuickBooksComponent } from './training-quick-books.component';

describe('TrainingQuickBooksComponent', () => {
  let component: TrainingQuickBooksComponent;
  let fixture: ComponentFixture<TrainingQuickBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingQuickBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingQuickBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
