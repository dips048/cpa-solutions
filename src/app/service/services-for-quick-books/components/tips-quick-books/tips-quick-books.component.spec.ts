import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsQuickBooksComponent } from './tips-quick-books.component';

describe('TipsQuickBooksComponent', () => {
  let component: TipsQuickBooksComponent;
  let fixture: ComponentFixture<TipsQuickBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipsQuickBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsQuickBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
