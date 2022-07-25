import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuneUpQuickBooksComponent } from './tune-up-quick-books.component';

describe('TuneUpQuickBooksComponent', () => {
  let component: TuneUpQuickBooksComponent;
  let fixture: ComponentFixture<TuneUpQuickBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuneUpQuickBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuneUpQuickBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
