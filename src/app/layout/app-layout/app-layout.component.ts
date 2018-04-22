import { Component, OnDestroy } from '@angular/core';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnDestroy {
  routes = [
    {route: '/', title: 'Home', icon: 'home'},
    {route: '/folders', title: 'Folders', icon: 'folder'},
    {route: '/users', title: 'Users', icon: 'face'}
  ];
  navBarOpenL = true;
  navBarOpenR = true;
  mode = 'side';
  watcher: Subscription;
  constructor(media: ObservableMedia) {
    this.watcher = media.subscribe((change: MediaChange) => {
      if ( change.mqAlias === 'xs') {
        this.loadMobileContent();
      } else {
        this.loadDashBoardContent();
      }
    });
  }

  ngOnDestroy(){
    this.watcher.unsubscribe();
  }

  toggleNavL() {
    this.navBarOpenL = !this.navBarOpenL;
  }
  loadMobileContent() {
    this.navBarOpenL = false;
    this.navBarOpenR = false;
    this.mode = 'over';
  }

  loadDashBoardContent() {
    this.navBarOpenL = true;
    this.navBarOpenR = true;
    this.mode = 'side';
  }
}
