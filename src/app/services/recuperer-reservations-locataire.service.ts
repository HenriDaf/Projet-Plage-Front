import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class RecupererReservationsLocataireService {

  constructor(private httpClient:HttpClient, private localService:LocalService) { }

  url="http://localhost:8080/api/";

  recupererReservations(){
  return  this.httpClient.get(this.url+"locations/locataire/"+this.localService.getData('idLocataire'));

  }
}
