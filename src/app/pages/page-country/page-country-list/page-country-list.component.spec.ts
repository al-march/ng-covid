import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCountryListComponent } from './page-country-list.component';

describe('PageCountryListComponent', () => {
  let component: PageCountryListComponent;
  let fixture: ComponentFixture<PageCountryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCountryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
