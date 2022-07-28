import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlingSituationsComponent } from './handling-situations.component';

describe('HandlingSituationsComponent', () => {
  let component: HandlingSituationsComponent;
  let fixture: ComponentFixture<HandlingSituationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandlingSituationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlingSituationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
