import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultDashboardComponent } from './modules/components/default-dashboard/default-dashboard.component';
import { CalendarDashboardComponent } from './modules/components/calendar-dashboard/calendar-dashboard.component';
import { BudgetDashboardComponent } from './modules/components/budget-dashboard/budget-dashboard.component';
import { BudgetRequestComponent } from './modules/components/budget-request/budget-request.component';
import { AnamneseDashboardComponent } from './modules/components/anamnese-dashboard/anamnese-dashboard.component';
import { NewAnamneseComponent } from './modules/components/new-anamnese/new-anamnese.component';

const routes: Routes = [
  { path: '', component: DefaultDashboardComponent },
  { path: 'calendar', component: CalendarDashboardComponent },
  { path: 'budget', component: BudgetDashboardComponent },
  { path: 'anamnese', component: AnamneseDashboardComponent },
  { path: 'budget-request/:userid', component: BudgetRequestComponent },
  { path: 'anamnese-new/:userid', component: NewAnamneseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
