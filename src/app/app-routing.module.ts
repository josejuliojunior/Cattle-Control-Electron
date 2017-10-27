import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from  './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { MenuComponent } from './home/menu/menu.component';
import { CattleComponent } from './home/menu/cattle/cattle.component';
import { WeightComponent } from './home/menu/weight/weight.component';
import { ReportsComponent } from './home/menu/reports/reports.component';
import { CattleInfoComponent } from './home/menu/cattle/cattle-info/cattle-info.component';
import { ModalComponent } from './modal/modal.component';

const appRoutes: Routes =[
  { path: '', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'cattle', component: CattleComponent },
  { path: 'cattle/:id', component: CattleInfoComponent },
  { path: 'weight', component: WeightComponent },
  { path: 'weight/:id', component: ModalComponent },
  { path: 'reports', component: ReportsComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
