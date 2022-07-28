import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedCharityTechniquesFGComponent } from './advanced-charity-techniques-fg.component';

describe('AdvancedCharityTechniquesFGComponent', () => {
  let component: AdvancedCharityTechniquesFGComponent;
  let fixture: ComponentFixture<AdvancedCharityTechniquesFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedCharityTechniquesFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedCharityTechniquesFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
