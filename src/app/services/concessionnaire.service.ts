import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Statut } from '../model/Statut';

@Injectable({
  providedIn: 'root'
})
export class ConcessionnaireService {

  constructor(private httpClient:HttpClient) { }

url="http://localhost:8080/api/";


auth(datas:any){
  return this.httpClient.post(this.url+"authentificationConcessionnaire", datas)
}

recupererLocataire(){
  return this.httpClient.get(this.url+"recupererListeLocataire");
}


modifierStatut(datas:any[]){
  return this.httpClient.put(this.url+"changerStatutLocation",datas);
}

supprimerLocataire(id:number){
  return this.httpClient.delete(this.url+"supprimerLocataire/"+id)
}

recupererListLocation(): Observable<Location[]> {
  return this.httpClient.get<Location[]>(
    this.url+'locations/liste-location'
  );
}

recupererListLocationATraiter(): Observable<Location[]> {
  return this.httpClient.get<Location[]>(
    this.url+'locations/liste-statut/traitement'
  );
}

getStatuts():Observable<Statut[]>{
  return this.httpClient.get<Statut[]>(
    this.url+"listeDesStatuts"
  )
}
}
