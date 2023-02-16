import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModificationStatutService {

  constructor(private httpClient:HttpClient) { }

url="http://localhost:8080/api/changerStatutLocation";

modifierStatut(datas:any []){
return this.httpClient.put(this.url, datas);
}

}
