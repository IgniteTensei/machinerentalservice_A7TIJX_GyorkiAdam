import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RentalDTO } from 'models';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<RentalDTO[]>('/api/categories');
  }

  getOne(id: number) {
    return this.http.get<RentalDTO>('/api/categories/' + id);
  }

  create(rental: RentalDTO) {
    return this.http.post<RentalDTO>('/api/categories', rental);
  }

  update(rental: RentalDTO) {
    return this.http.put<RentalDTO>('/api/categories', rental);
  }

  delete(id: number) {
    return this.http.delete('/api/categories/' + id);
  }
}

