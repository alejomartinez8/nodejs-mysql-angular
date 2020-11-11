import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdviserComponent } from './formadviser.component';

describe('UpdateAdviserComponent', () => {
  let component: UpdateAdviserComponent;
  let fixture: ComponentFixture<UpdateAdviserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdviserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAdviserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
