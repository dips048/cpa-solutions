import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetYourIRSFileComponent } from './get-your-irs-file.component';

describe('GetYourIRSFileComponent', () => {
  let component: GetYourIRSFileComponent;
  let fixture: ComponentFixture<GetYourIRSFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetYourIRSFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetYourIRSFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
