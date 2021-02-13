import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectProgress } from '@app/store/progress/progress.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('header') headerRef: ElementRef;

  public headerHeight = '0px';

  public isLoading$ = this.store.pipe(select(selectProgress));

  constructor(
    private store: Store
  ) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.headerHeight = `calc(100% - ${this.headerRef.nativeElement.offsetHeight}px)`;
    });
  }
}
