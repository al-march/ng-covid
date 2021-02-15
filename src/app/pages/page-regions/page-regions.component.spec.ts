import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRegionsComponent } from './page-regions.component';

describe('PageRegionsComponent', () => {
  let component: PageRegionsComponent;
  let fixture: ComponentFixture<PageRegionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRegionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
