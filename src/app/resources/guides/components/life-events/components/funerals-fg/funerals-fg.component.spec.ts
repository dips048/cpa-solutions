import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuneralsFGComponent } from './funerals-fg.component';

describe('FuneralsFGComponent', () => {
  let component: FuneralsFGComponent;
  let fixture: ComponentFixture<FuneralsFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuneralsFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuneralsFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
