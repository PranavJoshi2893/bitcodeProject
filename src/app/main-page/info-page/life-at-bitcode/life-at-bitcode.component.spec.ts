import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeAtBitcodeComponent } from './life-at-bitcode.component';

describe('LifeAtBitcodeComponent', () => {
  let component: LifeAtBitcodeComponent;
  let fixture: ComponentFixture<LifeAtBitcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeAtBitcodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeAtBitcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
