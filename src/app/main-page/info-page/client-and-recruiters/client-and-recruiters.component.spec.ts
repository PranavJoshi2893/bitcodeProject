import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAndRecruitersComponent } from './client-and-recruiters.component';

describe('ClientAndRecruitersComponent', () => {
  let component: ClientAndRecruitersComponent;
  let fixture: ComponentFixture<ClientAndRecruitersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAndRecruitersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAndRecruitersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
