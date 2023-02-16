import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Locataire } from '../model/Locataire';

@Injectable({
  providedIn: 'root',
})
export class LocataireService {
  constructor(private client: HttpClient) {}

  ajouterLocataire(user: Locataire): Observable<Locataire> {
    return this.client.post<Locataire>(
      `http://localhost:8080/creationLocataire`,
      user
    );
  }
}
