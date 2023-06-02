import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PartnerDTO, MachineDTO, RentalDTO } from 'models';
import { ToastrService } from 'ngx-toastr';
import { MachineService } from '../services/machine.service';
import { PartnerService } from '../services/partner.service';
import { RentalService } from '../services/rental.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-machines-form',
  templateUrl: './machines-form.component.html',
  styleUrls: ['./machines-form.component.css']
})
export class MachinesFormComponent implements OnInit {

  isNewMachine = true;

  rentals: RentalDTO[] = [];

  machineForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    mName: this.formBuilder.control(''),
    mBrand: this.formBuilder.control(''),
    mType: this.formBuilder.control(''),
    mPerformance: this.formBuilder.control(0),
    mWeight: this.formBuilder.control(0),
    mSecurityDeposit: this.formBuilder.control(0),
    mDailyRentalFee: this.formBuilder.control(0),
    mRental: this.formBuilder.control<null | RentalDTO>(null)
  });
  
  constructor(
    private formBuilder: FormBuilder,
    private machineService: MachineService,
    private rentalService: RentalService,
    private partnerService: PartnerService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}  
    
    ngOnInit(): void {
      const id = this.activatedRoute.snapshot.params['id'];
  
      if (id) {
        this.isNewMachine = false;
  
        this.machineService.getOne(id).subscribe({
          next: (machine) => this.machineForm.setValue(machine),
          error: (err) => {
            console.error(err);
            this.toastrService.error('A gép adatainak betöltése sikertelen.', 'Hiba');
          }
        });
      }
    }

    addMachine() {
      const product = this.machineForm.value as MachineDTO;

      if (this.isNewMachine) {
        this.machineService.create(product).subscribe({
          next: (machine) => {
            this.toastrService.success('Gép hozzáadva, id:' + machine.id, 'Siker');
          },
          error: (err) => {
            this.toastrService.error('Gép hozzáadása nem sikerült.', 'Hiba');
          }
        });
      }
      else {
        this.machineService.update(product).subscribe({
          next: (machine) => {
            this.toastrService.success('Gép szerkesztve', 'Siker');
          },
          error: (err) => {
            this.toastrService.error('A gép szerkesztése nem sikerült.', 'Hiba');
          }
        });
      }
      
    }

  goToMachineList() {
    this.router.navigate(['/machines-list']);
  }

  
}