import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class CalculoService {
  messages: string[] = [];
  private url: string = 'http://localhost/dev/multigrande/index.php/mult';
  
  constructor(public http: HttpClient ) { 
  	 //this.http.get('https://reqres.in/api/users?page=2');
  }

  multiplicar(operadores: any): Observable<any>{
  	//console.log(operadores);
  	return this.http.post<any>(this.url,operadores);
  }
  historial(): Observable<any>{
  	return this.http.get<any>(this.url);
  }
  eliminar(id: any): Observable<any>{
  	return this.http.post<any>(this.url+'/eliminar',id);
  }
}