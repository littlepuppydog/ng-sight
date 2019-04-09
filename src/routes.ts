import { Routes } from '@angular/router';
import { SectionSalesComponent } from './app/sections/section-sales/section-sales.component';
import { SectionOrdersComponent } from './app/sections/section-orders/section-orders.component';
import { SectionHealthComponent } from './app/sections/section-health/section-health.component';
import { CreateEmployeeComponent } from './app/create-employee/create-employee.component';
 
export const appRoutes: Routes = [
    {path: 'sales', component: SectionSalesComponent},
    {path: 'orders', component: SectionOrdersComponent},
    {path: 'health', component: SectionHealthComponent},
    {path: 'createemployee', component: CreateEmployeeComponent},
    {path: '', redirectTo: '/sales', pathMatch: 'full'},
];