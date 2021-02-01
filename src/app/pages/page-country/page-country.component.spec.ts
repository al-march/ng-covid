import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCountryComponent } from './page-country.component';

describe('PageCountryComponent', () => {
  let component: PageCountryComponent;
  let fixture: ComponentFixture<PageCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
