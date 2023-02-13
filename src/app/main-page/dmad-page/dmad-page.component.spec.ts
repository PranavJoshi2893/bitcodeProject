import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DMADPageComponent } from './dmad-page.component';

describe('DMADPageComponent', () => {
  let component: DMADPageComponent;
  let fixture: ComponentFixture<DMADPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DMADPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DMADPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
