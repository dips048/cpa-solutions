import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingDivorceComponent } from './getting-divorce.component';

describe('GettingDivorceComponent', () => {
  let component: GettingDivorceComponent;
  let fixture: ComponentFixture<GettingDivorceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GettingDivorceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingDivorceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
