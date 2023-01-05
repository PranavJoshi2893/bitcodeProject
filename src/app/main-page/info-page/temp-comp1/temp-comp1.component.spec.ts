import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempComp1Component } from './temp-comp1.component';

describe('TempComp1Component', () => {
  let component: TempComp1Component;
  let fixture: ComponentFixture<TempComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempComp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
