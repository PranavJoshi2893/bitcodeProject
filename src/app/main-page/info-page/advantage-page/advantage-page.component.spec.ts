import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantagePageComponent } from './advantage-page.component';

describe('AdvantagePageComponent', () => {
  let component: AdvantagePageComponent;
  let fixture: ComponentFixture<AdvantagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvantagePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvantagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
