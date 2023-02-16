import { Injectable } from '@angular/core';
import { Pays } from '../model/Pays';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class PaysService {
  constructor(private client: HttpClient) {}

  getPays(): Observable<Pays[]> {
    return this.client.get<Pays[]>(`http://localhost:8080/api/listePays`);
  }
}
