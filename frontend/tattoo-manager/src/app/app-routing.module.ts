import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultDashboardComponent } from './modules/components/default-dashboard/default-dashboard.component';
import { CalendarDashboardComponent } from './modules/components/calendar-dashboard/calendar-dashboard.component';
import { BudgetDashboardComponent } from './modules/components/budget-dashboard/budget-dashboard.component';
import { LoginFormPageComponent } from './modules/components/login-form-page/login-form-page.component';

const routes: Routes = [
  { path: '', component: DefaultDashboardComponent },
  { path: 'calendar', component: CalendarDashboardComponent },
  { path: 'budget', component: BudgetDashboardComponent },
  { path: 'budget-request/:userid', component: LoginFormPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
