import { LienDeParente } from './../model/LienDeParente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class LienDeParenteService {
  constructor(private client: HttpClient) {}

  getLienDeParente(): Observable<LienDeParente[]> {
    return this.client.get<LienDeParente[]>(
      `http://localhost:8080/api/listeLienParente`
    );
  }
}
