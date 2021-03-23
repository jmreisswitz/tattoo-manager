import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultDashboardComponent } from './modules/components/default-dashboard/default-dashboard.component';
import { CalendarDashboardComponent } from './modules/components/calendar-dashboard/calendar-dashboard.component';
import { BudgetDashboardComponent } from './modules/components/budget-dashboard/budget-dashboard.component';

const routes: Routes = [
  { path: '', component: DefaultDashboardComponent },
  { path: 'calendar', component: CalendarDashboardComponent },
  { path: 'budget', component: BudgetDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
