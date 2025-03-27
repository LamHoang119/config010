import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Config011Component } from './config011.component';

describe('Config011Component', () => {
  let component: Config011Component;
  let fixture: ComponentFixture<Config011Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Config011Component]
    });
    fixture = TestBed.createComponent(Config011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
