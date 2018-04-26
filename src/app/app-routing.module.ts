import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {AppLayoutComponent} from './layout/app-layout/app-layout.component';
import {ChartComponent} from './chart/chart/chart.component';

const routes: Routes = [
  {path: '', component: AppLayoutComponent,
  children: [
    {
      path: 'users',
      component: AppComponent
    },
    {
      path: 'chart',
      component: ChartComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
