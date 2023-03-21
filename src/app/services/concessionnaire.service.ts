import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Identifiant } from '../model/Identifiant.model';
import { Statut } from '../model/Statut';

/**
 * Service utilisé pour communiquer avec le back-end Spring, il comprend des méthodes permettant l'authentification d'un concessionnaire,
 * ainsi que toute les méthodes permettant au concessionnaire d'assurer sa fonction, (récupération d'une liste d'utikisateurs, de la liste des locations en attente de traitement ...)
 */

@Injectable({
  providedIn: 'root'
})
export class ConcessionnaireService {

  constructor(private httpClient:HttpClient) { }

url="http://localhost:8080/api/";



/**
 * 
 * @param datas 
 * @returns 
 */
auth(datas:Identifiant){
  return this.httpClient.post(this.url+"authentificationConcessionnaire", datas)
}

/**
 * 
 * @returns 
 * 
 * Méthode qui renvoie une liste de locataire.
 */
recupererLocataire(){
  return this.httpClient.get(this.url+"recupererListeLocataire");
}


modifierStatut(datas:Statut){
  return this.httpClient.put(this.url+"changerStatutLocation",datas);
}


/**
 * 
 * @param id 
 * @returns 
 * 
 * Méthode qui prend en parmamètre l'id d'un locataire, et qui permet sa suppression.
 * Renvoie un boolean true ou une erreur.
 */
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
