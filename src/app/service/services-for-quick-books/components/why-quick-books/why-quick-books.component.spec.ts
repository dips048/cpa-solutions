import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyQuickBooksComponent } from './why-quick-books.component';

describe('WhyQuickBooksComponent', () => {
  let component: WhyQuickBooksComponent;
  let fixture: ComponentFixture<WhyQuickBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyQuickBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyQuickBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
