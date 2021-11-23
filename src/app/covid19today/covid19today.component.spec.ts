import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19todayComponent } from './covid19today.component';

describe('Covid19todayComponent', () => {
  let component: Covid19todayComponent;
  let fixture: ComponentFixture<Covid19todayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Covid19todayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Covid19todayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
