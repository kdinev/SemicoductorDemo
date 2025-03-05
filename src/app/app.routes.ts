import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ProcessAndStatesComponent } from './process-and-states/process-and-states.component';
import { HealthCheckComponent } from './health-check/health-check.component';

export const routes: Routes = [
  { path: '', redirectTo: 'process-and-states', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'process-and-states', component: ProcessAndStatesComponent, data: { text: 'Process-And-States' } },
  { path: 'health-check', component: HealthCheckComponent, data: { text: 'Health-Check' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
