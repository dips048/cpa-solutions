import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaionImgBtnComponent } from './consultaion-img-btn.component';

describe('ConsultaionImgBtnComponent', () => {
  let component: ConsultaionImgBtnComponent;
  let fixture: ComponentFixture<ConsultaionImgBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaionImgBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaionImgBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
