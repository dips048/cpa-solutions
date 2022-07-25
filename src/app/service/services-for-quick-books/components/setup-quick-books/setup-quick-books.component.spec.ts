import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupQuickBooksComponent } from './setup-quick-books.component';

describe('SetupQuickBooksComponent', () => {
  let component: SetupQuickBooksComponent;
  let fixture: ComponentFixture<SetupQuickBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupQuickBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupQuickBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
