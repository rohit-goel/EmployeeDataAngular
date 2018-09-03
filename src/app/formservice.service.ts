import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormserviceService {
  url : string = "http://localhost:8080/api/";
  storeData;
  constructor(private http: HttpClient) { }
  setMethod(path,dataReceived): Observable<any> {
    return this.http.post<any>(this.url+path,dataReceived,httpoptions);
  }


  getMethod(path): Observable<any> {
    return this.http.get(this.url+path,httpoptions);
  }
}
const httpoptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'responseType':'text'
  })
};