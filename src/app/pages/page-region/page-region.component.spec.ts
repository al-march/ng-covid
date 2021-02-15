import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRegionComponent } from './page-region.component';

describe('PageRegionComponent', () => {
  let component: PageRegionComponent;
  let fixture: ComponentFixture<PageRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
