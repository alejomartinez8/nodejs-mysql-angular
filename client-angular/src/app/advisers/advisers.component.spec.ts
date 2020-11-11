import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisersComponent } from './advisers.component';

describe('AdvisersComponent', () => {
  let component: AdvisersComponent;
  let fixture: ComponentFixture<AdvisersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvisersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
