import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MachinesListComponent } from './machines-list/machines-list.component';
import { MachinesFormComponent } from './machines-form/machines-form.component';
import { PartnerFormComponent } from './partner-form/partner-form.component';
import { PartnerListComponent } from './partner-list/partner-list.component';
import { RentalFormComponent } from './rental-form/rental-form.component';
import { RentalListComponent } from './rental-list/rental-list.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    MachinesListComponent,
    MachinesFormComponent,
    PartnerFormComponent,
    PartnerListComponent,
    RentalFormComponent,
    RentalListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
