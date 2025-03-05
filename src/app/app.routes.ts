import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ProcessAndStatesComponent } from './process-and-states/process-and-states.component';
import { View3Component } from './view-3/view-3.component';

export const routes: Routes = [
  { path: '', redirectTo: 'process-and-states', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'process-and-states', component: ProcessAndStatesComponent, data: { text: 'Process-And-States' } },
  { path: 'view-3', component: View3Component, data: { text: 'View3' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
