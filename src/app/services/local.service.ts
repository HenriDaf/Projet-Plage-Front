import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

id="";

  constructor() { }



public saveData(key:string, value:string){
  sessionStorage.setItem(key,this.encrypt(value));
}
public getData(key:string){
  let data= sessionStorage.getItem(key) || "";
  return this.decrypt(data);
}
public removeData(key:string){
  sessionStorage.removeItem(key);
}
public clearData(){
  sessionStorage.clear();
}

  private encrypt(txt:string):string{
    return CryptoJS.AES.encrypt(txt, this.id).toString();
  }
  private decrypt(txt:string):string{
    return CryptoJS.AES.decrypt(txt, this.id).toString(CryptoJS.enc.Utf8);
  }


  concessionnaireConnecte(){
    let token = sessionStorage.getItem('tokenConcessionnaire');
    if(token) return true;
    else return false;
  }
  locataireConnecte(){
    let token = sessionStorage.getItem('tokenLocataire');
    if(token) return true;
    else return false;
  }
}
