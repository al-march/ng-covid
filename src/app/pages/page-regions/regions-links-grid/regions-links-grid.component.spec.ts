import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsLinksGridComponent } from './regions-links-grid.component';

describe('RegionsLinksGridComponent', () => {
  let component: RegionsLinksGridComponent;
  let fixture: ComponentFixture<RegionsLinksGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionsLinksGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsLinksGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
