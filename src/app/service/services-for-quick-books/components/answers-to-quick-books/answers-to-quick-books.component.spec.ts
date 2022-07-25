import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswersToQuickBooksComponent } from './answers-to-quick-books.component';

describe('AnswersToQuickBooksComponent', () => {
  let component: AnswersToQuickBooksComponent;
  let fixture: ComponentFixture<AnswersToQuickBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswersToQuickBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswersToQuickBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
