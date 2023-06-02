import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PartnerDTO } from 'models';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<PartnerDTO[]>('/api/partners');
  }

  getOne(id: number) {
    return this.http.get<PartnerDTO>('/api/partners/' + id);
  }

  create(partner: PartnerDTO) {
    return this.http.post<PartnerDTO>('/api/partners', partner);
  }

  update(partner: PartnerDTO) {
    return this.http.put<PartnerDTO>('/api/partners', partner);
  }

  delete(id: number) {
    return this.http.delete('/api/partners/' + id);
  }
}
