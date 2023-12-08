import { Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { PoemsComponent } from '../components/poems/poems.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'poems',
    component: PoemsComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
