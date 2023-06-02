import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachinesFormComponent } from './machines-form/machines-form.component';
import { MachinesListComponent } from './machines-list/machines-list.component';
import { PartnerFormComponent } from './partner-form/partner-form.component';
import { PartnerListComponent } from './partner-list/partner-list.component';
import { RentalFormComponent } from './rental-form/rental-form.component';
import { RentalListComponent } from './rental-list/rental-list.component';

const routes: Routes = [
  { 
    path: '', redirectTo: '/machines-form', pathMatch: 'full' 
  },
  {
    path: 'machines-list',
    component: MachinesListComponent
  },
  {
    path: 'machines-form',
    component: MachinesFormComponent
  },
  {
    path: 'machines-form/:id',
    component: MachinesFormComponent
  },
  {
    path: 'partner-list',
    component: PartnerListComponent
  },
  {
    path: 'partner-form',
    component: PartnerFormComponent
  },
  {
    path: 'rental-list',
    component: RentalListComponent
  },
  {
    path: 'rental-list/rental-form',
    component: RentalFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
