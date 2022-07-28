import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumnentLocatorSystemFGComponent } from './documnent-locator-system-fg.component';

describe('DocumnentLocatorSystemFGComponent', () => {
  let component: DocumnentLocatorSystemFGComponent;
  let fixture: ComponentFixture<DocumnentLocatorSystemFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumnentLocatorSystemFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumnentLocatorSystemFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
