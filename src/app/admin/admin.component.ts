import { Component, OnInit } from '@angular/core';
import { Pedido } from '../pedido.model';
import { PedidoService } from '../pedido.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private pedidoService: PedidoService) { }

 
  produto: string;
  quantidade: number;
  mesa: number;
  pedidosList: any[];

  ngOnInit(): void {
    this.pedidoService.getTodasMesas().subscribe(data =>{
      this.pedidosList = data;
    })
  }

  sendPedido(){
    const pedido: Pedido = {
      produto: this.produto,
      quantidade: this.quantidade,
      mesa: this.mesa,
    }
    this.pedidoService.postPedido(pedido);

    const comanda: string = "Produto: " + pedido.produto + "\n Quantidade: " + pedido.quantidade + "\n Para a mesa: " + pedido.mesa;
    const temp: string = "O pedido \n" + comanda + "\n foi feito";
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: temp,
      showConfirmButton: false,
      timer: 2000,
      showLoaderOnConfirm: true,
    });
  }

}
