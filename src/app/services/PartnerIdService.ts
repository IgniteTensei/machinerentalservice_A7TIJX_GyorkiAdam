import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdService {
  private lastAssignedId: number = 0;

  getNextId(): number {
    this.lastAssignedId += 1;
    return this.lastAssignedId;
  }
}