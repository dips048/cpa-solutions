import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathOfLovedOnesComponent } from './death-of-loved-ones.component';

describe('DeathOfLovedOnesComponent', () => {
  let component: DeathOfLovedOnesComponent;
  let fixture: ComponentFixture<DeathOfLovedOnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathOfLovedOnesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathOfLovedOnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
