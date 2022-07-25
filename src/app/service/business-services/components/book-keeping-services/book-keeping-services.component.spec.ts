import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookKeepingServicesComponent } from './book-keeping-services.component';

describe('BookKeepingServicesComponent', () => {
  let component: BookKeepingServicesComponent;
  let fixture: ComponentFixture<BookKeepingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookKeepingServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookKeepingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
