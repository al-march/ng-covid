import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectProgress } from '@app/store/progress/progress.selectors';
import { selectDrawer } from '@app/store/drawer/drawer.selectors';
import { actionDrawer } from '@app/store/drawer/drawer.actions';
import { getStoreValue } from '@app/store/store.helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('header') headerRef: ElementRef;

  public headerHeight = '0px';

  public isLoading$ = this.store.pipe(select(selectProgress));
  public drawerState$ = this.store.pipe(select(selectDrawer));

  constructor(
    private store: Store
  ) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.headerHeight = `calc(100% - ${this.headerRef.nativeElement.offsetHeight}px)`;
    });
  }

  public async toggleSidebar() {
    const {isActive} = await getStoreValue(this.drawerState$);
    this.dispatchSidebar(!isActive);
  }

  private dispatchSidebar(isActive: boolean) {
    this.store.dispatch(actionDrawer({isActive}));
  }
}
