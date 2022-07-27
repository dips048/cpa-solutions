import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialSecurityFGComponent } from './social-security-fg.component';

describe('SocialSecurityFGComponent', () => {
  let component: SocialSecurityFGComponent;
  let fixture: ComponentFixture<SocialSecurityFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialSecurityFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialSecurityFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
