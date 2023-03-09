import { Injectable } from '@angular/core';
import { auto } from '@popperjs/core';
import * as CryptoJS from 'crypto-js';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

id="";

  constructor() { }
 helper = new JwtHelperService();

public saveToken(token:string):void{
  sessionStorage.setItem('token', token);
}

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
   // let token = sessionStorage.getItem('tokenConcessionnaire');
    let token = sessionStorage.getItem('token');
   let valid=false;
    if(token){
     valid=(!this.isTokenExpired(token) && this.isConcessionnaire(token));
    
    // console.log("dans concessionnaireConnecte() "+valid)
    }
   // console.log(valid);
  return valid;
  }
  locataireConnecte(){
    let token = sessionStorage.getItem('tokenLocataire');
    if(token) return true;
    else return false;
  }

  getToken():string | null{
return sessionStorage.getItem('token');
  }

/*  isTokenValid(token:String):boolean{
/*const expired=(JSON.parse(atob(token.split('.')[1]))).exp;
/*console.log(expired);
console.log(Math.floor((new Date).getTime()/1000))
console.log((Math.floor((new Date).getTime()/1000))>=expired)
//console.log(!(Math.floor((new Date).getTime()/1000))>=expired);

return (Math.floor((new Date).getTime()/1000))>=expired
  }*/

  isConcessionnaire(token:string){

    let answer=false;
let authorities:[]=(this.helper.decodeToken(token).ROLE);

/*if(authorities){
  for(let value of authorities){
    console.log(value['authority'])
    if(value['authority']=='CONCESSIONNAIRE'){
      answer=true;
   
    }
  }    


 
   
 
}*/

if(authorities){
  authorities.forEach(function(value){
    if(value['authority']=='CONCESSIONNAIRE'){
      answer=true;
    }
  })
}


return answer;
  }

  isTokenExpired(token:string){
    //console.log("token "+token)
    //console.log("dans isTokenExpired() "+this.helper.decodeToken(token))
    //console.log("dans isTokenExpired() "+this.helper.getTokenExpirationDate(token))

    if(this.helper.getTokenExpirationDate(token)===null){
   
      return true;
    }
   // console.log("dans isTokenExpired() "+this.helper.isTokenExpired(token))
   return this.helper.isTokenExpired(token);
  }
}
