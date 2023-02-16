import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListeLocationsAllService {
  constructor(private httpClient: HttpClient) {}

  recupererListLocation(): Observable<Location[]> {
    return this.httpClient.get<Location[]>(
      'http://localhost:8080/api/locations/liste-location'
    );
  }
}
