import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Identifiant } from '../model/Identifiant.model';
import { Locataire } from '../model/Locataire';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root',
})
export class LocataireService {
  constructor(private httpClient: HttpClient, private localService:LocalService) {}

url="http://localhost:8080/api/";

  auth(datas:Identifiant){
    return this.httpClient.post(this.url+"authentificationLocataire",datas);
  }

  ajouterLocataire(user: Locataire): Observable<Locataire> {
    return this.httpClient.post<Locataire>(
    this.url+"inscriptionLocataire",
      user
    );
  }


  recupererReservations():Observable<Location[]>{
    return  this.httpClient.get<Location[]>(this.url+"locations/locataireMail/"+this.localService.getEmail());
  
    }
 
}
