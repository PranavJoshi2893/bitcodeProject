import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementsPageComponent } from './placements-page.component';

describe('PlacementsPageComponent', () => {
  let component: PlacementsPageComponent;
  let fixture: ComponentFixture<PlacementsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
