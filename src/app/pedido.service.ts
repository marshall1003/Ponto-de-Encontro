import { Injectable, OnInit } from '@angular/core';
import { Pedido } from './pedido.model';
import { Observable, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { 
    this.backEndURL = this.getBackEndUrl();
  }

  backEndURL: string;

  getMesa(table: number): Observable<any> {
    const mesa = String(table);
    return this.http.get(`${this.backEndURL}/pedidos/query/${mesa}`);
  }
  getTotalMesa(table: number): Observable<any> {
    const mesa = String(table);
    return this.http.get(`${this.backEndURL}/pedidos/query/${mesa}/total`);
  }

  getTodasMesas(): Observable<any> {
    return this.http.get(`${this.backEndURL}/pedidos`);
  }
 
  postPedido(pedido: Pedido) {
    return this.http.post(`${this.backEndURL}/pedidos`, pedido).subscribe(data => {
    });
  }

  getProdutos(table: number): Observable<any> {
    const mesa = String(table);
    return this.http.get(`${this.backEndURL}/pedidos/query/produtos/${mesa}`);
  }

  deleteMesa(mesa: number){
    const table = String(mesa);
    return this.http.post(`${this.backEndURL}/pedidos/query/${table}/delete`, null);
  }
  deletePedido(mesa: number, prodid: number) {
    const table = String(mesa);
    const id = String(prodid);
    return this.http.post(`${this.backEndURL}/pedidos/query/${table}/${id}/delete`, null);
  }

  getBackEndUrl(): string {
    const segements = document.URL.split('/');
    const reggie = new RegExp(/localhost/);
    return reggie.test(segements[2]) ? 'http://localhost:3002' : 'https://nestjs-typeorm-postgres.herokuapp.com';
  }

}


