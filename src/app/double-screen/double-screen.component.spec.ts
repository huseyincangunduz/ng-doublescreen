import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleScreenComponent } from './double-screen.component';

describe('DoubleScreenComponent', () => {
  let component: DoubleScreenComponent;
  let fixture: ComponentFixture<DoubleScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
