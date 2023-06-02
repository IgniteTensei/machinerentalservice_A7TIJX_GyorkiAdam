import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartnerDTO, RentalDTO, MachineDTO } from 'models';
import { ToastrService } from 'ngx-toastr';
import { MachineService } from '../services/machine.service'

@Component({
  selector: 'app-machines-list',
  templateUrl: './machines-list.component.html',
  styleUrls: ['./machines-list.component.css']
})

export class MachinesListComponent implements OnInit {

  machines: MachineDTO[] = [];

  constructor(
    private router: Router,
    private toastrService: ToastrService,
    private machineService: MachineService) { }

  ngOnInit(): void {
    this.machineService.getAll().subscribe({
      next: (machines) => { this.machines = machines },
      error: (err) => {
        this.toastrService.error('Hiba a gép betöltésekor!', 'Hiba');
      }
    });
  }

  goToMachineForm(id: number) {
    this.router.navigate([ '/machines-form', id ]);
  }
  
  deleteMachineFromList(machine: MachineDTO) {
    this.machineService.delete(machine.id).subscribe({
      next: () => {
        const index = this.machines.indexOf(machine);
        if (index > -1) {
          this.machines.splice(index, 1);
        }
      },
      error: (err) => {
        console.error(err);
        this.toastrService.error('Hiba a gép törlésekor!', 'Hiba');
      }
    })
  }
}
