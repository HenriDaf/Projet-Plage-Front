import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationConcessionnaireService {

  constructor(private httpClient:HttpClient) { }

  url="http://localhost:8080/";
  

  authentifier(datas: any){
   return this.httpClient.post(this.url+"authentifierConcessionnaire", datas);
  }
}
