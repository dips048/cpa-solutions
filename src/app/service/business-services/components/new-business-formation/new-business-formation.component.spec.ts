import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBusinessFormationComponent } from './new-business-formation.component';

describe('NewBusinessFormationComponent', () => {
  let component: NewBusinessFormationComponent;
  let fixture: ComponentFixture<NewBusinessFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBusinessFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBusinessFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
