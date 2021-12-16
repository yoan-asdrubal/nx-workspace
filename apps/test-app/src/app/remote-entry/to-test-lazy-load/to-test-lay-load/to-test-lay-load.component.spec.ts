import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToTestLayLoadComponent } from './to-test-lay-load.component';

describe('ToTestLayLoadComponent', () => {
  let component: ToTestLayLoadComponent;
  let fixture: ComponentFixture<ToTestLayLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToTestLayLoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToTestLayLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
