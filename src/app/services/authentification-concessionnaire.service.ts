import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationConcessionnaireService {

  constructor(private httpClient:HttpClient) { }

  url="http://localhost:8080/";
  url2="http://localhost:8080/api/v1/auth/";
  

  authentifier(datas: any){
   return this.httpClient.post(this.url+"authentifierConcessionnaire", datas);
  }

  auth(datas:any){
    return this.httpClient.post(this.url2+"authentificationConcessionnaire",datas);
  }
}
