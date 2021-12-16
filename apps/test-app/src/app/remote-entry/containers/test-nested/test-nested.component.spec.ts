import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNestedComponent } from './test-nested.component';

describe('TestNestedComponent', () => {
  let component: TestNestedComponent;
  let fixture: ComponentFixture<TestNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestNestedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
