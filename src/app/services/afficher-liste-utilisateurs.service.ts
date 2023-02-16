import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AfficherListeUtilisateursService {


url="http://localhost:8080/";

  constructor(private httpClient:HttpClient) { }



  recupererLocataire(){
   return this.httpClient.get(this.url+"recupererListeLocataire");
  }
}
