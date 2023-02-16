import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupprimerLocataireService {

  constructor(private httpClient:HttpClient) { }

  
  url="http://localhost:8080"
  supprimerLocataire(id:number){
    return this.httpClient.delete(this.url+"/supprimerLocataire/"+id);
  }

}
