import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import { MarginIconComponent } from './margin-icon/margin-icon.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    FlexLayoutModule
  ],
  declarations: [ToolbarComponent, AppLayoutComponent, MarginIconComponent],
  exports: [ToolbarComponent, AppLayoutComponent]
})
export class LayoutModule { }
