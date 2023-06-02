import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Partner, partners } from 'src/app/partners';
import { IdService } from 'src/app/services/PartnerIdService';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-partner-form',
  templateUrl: './partner-form.component.html',
  styleUrls: ['./partner-form.component.css']
})
export class PartnerFormComponent implements OnInit {
  
  constructor(private router: Router, private idService: IdService, private toastrService: ToastrService) {}

  newPartner: Partner = this.defaultPartner();

  defaultPartner(): Partner {
    return {
      pId: 0,
      pName: '',
      pRepresentative: '',
      pTaxNumber: 0,
      pCompanyRegistrationNumber: 0,
      pHeadquarters: '',
      pBalance: 15000
    };
  }

  addPartner(): void {

    let goodToGo = true;

    if(this.newPartner.pTaxNumber.toString().length != 11)
    {
        goodToGo = false;
        this.toastrService.error('Az adószám formátuma hibás! 11 számjegy!', 'Hiba');
    }

    if(this.newPartner.pCompanyRegistrationNumber.toString().length != 10)
    {
        goodToGo = false;
        this.toastrService.error('Az cégjegyzékszám formátuma hibás! 10 számjegy!', 'Hiba');
    }

    if(goodToGo)
    {
      this.newPartner.pId = this.makeIdToPartner();
      partners.push({ ...this.newPartner });
      this.newPartner = this.defaultPartner();
      this.router.navigate(['partner-list']);
    }
    
  }

  makeIdToPartner(): number {
    const nextId = this.idService.getNextId();
    return nextId;
  }

  goToPartnerListPage() {
    this.router.navigate(['partner-list']);
  }

  ngOnInit(): void {}
}
