import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './modules/components/main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { BudgetDashboardComponent } from './modules/components/budget-dashboard/budget-dashboard.component';
import { CalendarDashboardComponent } from './modules/components/calendar-dashboard/calendar-dashboard.component';
import { DefaultDashboardComponent } from './modules/components/default-dashboard/default-dashboard.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BudgetRequestComponent } from './modules/components/budget-request/budget-request.component';
import { HttpClientModule } from '@angular/common/http';
import { BudgetCardComponent } from './modules/components/budget-card/budget-card.component';
import { MatCardModule } from '@angular/material/card';
import { BudgetDetailComponent } from './modules/components/budget-detail/budget-detail.component';
import { AnamneseDashboardComponent } from './modules/components/anamnese-dashboard/anamnese-dashboard.component';
import { SafePipe } from './core/pipe/safe.pipe';
import { AnamnesePdfDialogComponent } from './modules/components/anamnese-pdf-dialog/anamnese-pdf-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NewAnamneseComponent } from './modules/components/new-anamnese/new-anamnese.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FinanceDashboardComponent } from './modules/components/finance-dashboard/finance-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    BudgetDashboardComponent,
    CalendarDashboardComponent,
    DefaultDashboardComponent,
    BudgetRequestComponent,
    BudgetCardComponent,
    BudgetDetailComponent,
    AnamneseDashboardComponent,
    SafePipe,
    AnamnesePdfDialogComponent,
    NewAnamneseComponent,
    FinanceDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
