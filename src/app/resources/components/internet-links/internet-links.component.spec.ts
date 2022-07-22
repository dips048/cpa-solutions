import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetLinksComponent } from './internet-links.component';

describe('InternetLinksComponent', () => {
  let component: InternetLinksComponent;
  let fixture: ComponentFixture<InternetLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternetLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
