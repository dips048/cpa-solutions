import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IRAsFAQComponent } from './iras-faq.component';

describe('IRAsFAQComponent', () => {
  let component: IRAsFAQComponent;
  let fixture: ComponentFixture<IRAsFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IRAsFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IRAsFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
