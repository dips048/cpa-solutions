import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderCareComponent } from './elder-care.component';

describe('ElderCareComponent', () => {
  let component: ElderCareComponent;
  let fixture: ComponentFixture<ElderCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElderCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElderCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
