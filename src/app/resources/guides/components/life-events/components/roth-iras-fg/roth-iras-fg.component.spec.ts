import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RothIRAsFGComponent } from './roth-iras-fg.component';

describe('RothIRAsFGComponent', () => {
  let component: RothIRAsFGComponent;
  let fixture: ComponentFixture<RothIRAsFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RothIRAsFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RothIRAsFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
