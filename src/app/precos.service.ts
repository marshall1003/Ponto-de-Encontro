import { Injectable, OnInit } from '@angular/core';
import { Precos } from './precos.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrecosService {

  constructor(private http: HttpClient) {
    this.backEndURL = this.getBackEndUrl();
  }

  backEndURL: string;

  getPrecos(): Observable<any> {
    return this.http.get(`${this.backEndURL}/precos/query`);
  }

  PostPreco(preco: Precos) {
    return this.http.post(`${this.backEndURL}/precos`, preco).subscribe(data => {
    })
  }

  getBackEndUrl(): string {
    const segements = document.URL.split('/');
    const reggie = new RegExp(/localhost/);
    return reggie.test(segements[2]) ? 'http://localhost:3002' : 'https://nestjs-typeorm-postgres.herokuapp.com';
  }
}
