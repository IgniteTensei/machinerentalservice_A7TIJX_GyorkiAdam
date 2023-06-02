import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Partner, partners } from 'src/app/partners';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.css']
})

export class PartnerListComponent implements OnInit {

  constructor(private router: Router) { }

  partners: Partner[] = [];

  ngOnInit(): void {
    this.partners = partners;
  }

  goToAddNewPartnerPage() {
    this.router.navigate(['partner-form']);
  }
  
  deletePartnerItem(partner: Partner): void {
    const index = this.partners.indexOf(partner);
    if (index > -1) {
      this.partners.splice(index, 1);
    }
  }
}
