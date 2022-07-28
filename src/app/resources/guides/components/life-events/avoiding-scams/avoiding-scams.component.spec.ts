import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvoidingScamsComponent } from './avoiding-scams.component';

describe('AvoidingScamsComponent', () => {
  let component: AvoidingScamsComponent;
  let fixture: ComponentFixture<AvoidingScamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvoidingScamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvoidingScamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
