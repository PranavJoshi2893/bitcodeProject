import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantageBitcodeComponent } from './advantage-bitcode.component';

describe('AdvantageBitcodeComponent', () => {
  let component: AdvantageBitcodeComponent;
  let fixture: ComponentFixture<AdvantageBitcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvantageBitcodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvantageBitcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
