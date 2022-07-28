import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathOfSpouseFGComponent } from './death-of-spouse-fg.component';

describe('DeathOfSpouseFGComponent', () => {
  let component: DeathOfSpouseFGComponent;
  let fixture: ComponentFixture<DeathOfSpouseFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathOfSpouseFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathOfSpouseFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
