import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListeLocationsStatutsService {
  constructor(private httpClient: HttpClient) {}

  recupererListLocationATraiter(): Observable<Location[]> {
    return this.httpClient.get<Location[]>(
      'http://localhost:8080/api/locations/liste-statut/traitement'
    );
  }
}
