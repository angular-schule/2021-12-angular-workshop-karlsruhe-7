import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book } from '../shared/book';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should work!!!', () => {
    expect(component).toBeTruthy();
    const result = component.doRateUp({ isbn: '000'} as Book);
    const result2 = component.doRateDown({ isbn: '000'} as Book);

    expect(result).not.toBeFalsy();
    expect(result2).not.toBeFalsy();
  });
});
