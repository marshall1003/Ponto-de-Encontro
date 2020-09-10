import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { Pedido } from '../pedido.model';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  pedidos: Pedido[];
  selectedMesa: number;
  todasMesas: number[];
  tamanhodamesa: number = 0;
  total: number;

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.getTodasMesas().subscribe(data => {
      this.todasMesas = data;
    });
  }

  query(): void {
    let table = this.selectedMesa;
    this.pedidoService.getMesa(table).subscribe(data => {
      this.pedidos = data;
    });

    this.pedidoService.getTotalMesa(this.selectedMesa).subscribe(data => {
      this.total = Number(data);
    });

  }

  fecharMesa(): void {

    const valor = this.total.toFixed(2);

    const temp: string = "Valor total da mesa " + this.selectedMesa;
    const texto: string = "R$" + valor;

    this.pedidoService.deleteMesa(this.selectedMesa);

    Swal.fire({
      icon: 'success',
      position: 'center',
      title: temp,
      text: texto,
      confirmButtonText: 'Fechar',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
    });

    
    
  } 
}
