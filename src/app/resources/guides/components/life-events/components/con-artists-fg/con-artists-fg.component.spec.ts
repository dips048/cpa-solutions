import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConArtistsFGComponent } from './con-artists-fg.component';

describe('ConArtistsFGComponent', () => {
  let component: ConArtistsFGComponent;
  let fixture: ComponentFixture<ConArtistsFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConArtistsFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConArtistsFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
