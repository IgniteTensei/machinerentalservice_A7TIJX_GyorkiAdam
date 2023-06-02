import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MachineDTO } from 'models';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<MachineDTO[]>('/api/machines');
  }

  getOne(id: number) {
    return this.http.get<MachineDTO>('/api/machines/' + id);
  }

  create(machine: MachineDTO) {
    return this.http.post<MachineDTO>('/api/machines', machine);
  }

  update(machine: MachineDTO) {
    return this.http.put<MachineDTO>('/api/machines', machine);
  }

  delete(id: number) {
    return this.http.delete('/api/machines/' + id);
  }
}
