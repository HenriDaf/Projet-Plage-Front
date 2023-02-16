import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParasolsService {

  constructor(private httpClient:HttpClient) { }
url="http://localhost:8080/api/";
  recupererParasolsLibres(){
    return this.httpClient.get(this.url+"parasolsNonReserves");
  }
}
