import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCountriesStatTableComponent } from './all-countries-stat-table.component';

describe('AllCountriesStatTableComponent', () => {
  let component: AllCountriesStatTableComponent;
  let fixture: ComponentFixture<AllCountriesStatTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCountriesStatTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCountriesStatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
