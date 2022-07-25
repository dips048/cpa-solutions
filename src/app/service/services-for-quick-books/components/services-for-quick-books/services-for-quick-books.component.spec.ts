import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesForQuickBooksComponent } from './services-for-quick-books.component';

describe('ServicesForQuickBooksComponent', () => {
  let component: ServicesForQuickBooksComponent;
  let fixture: ComponentFixture<ServicesForQuickBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesForQuickBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesForQuickBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
