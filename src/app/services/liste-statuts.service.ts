import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Statut } from '../model/Statut';

@Injectable({
  providedIn: 'root',
})
export class ListeStatutsService {
  constructor(private client: HttpClient) {}

  //liste-des-statuts

  getStatuts(): Observable<Statut[]> {
    return this.client.get<Statut[]>(
      `http://localhost:8080/api/liste-des-statuts`
    );
  }
}
