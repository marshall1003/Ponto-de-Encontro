import { Component, OnInit } from '@angular/core';
import { PrecosService } from '../precos.service';
import { Precos } from '../precos.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {

  public precos: Precos[];
  nomeProduto: string;
  precoUn: number;
  codProd: number;

  constructor(private precosService: PrecosService) { }

  ngOnInit(): void {
    this.precosService.getPrecos().subscribe(data => {
      this.precos = data;
    });
  }
  

  InserirProduto() {

    let preco: Precos = {
      produto : this.nomeProduto,
      precoun : this.precoUn,
      codprod : this.codProd
    }

    this.precosService.PostPreco(preco);
    
    const temp: string = "O produto \n" + this.nomeProduto + "\n foi adicionado";
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: temp,
      showConfirmButton: false,
      timer: 2000,
      showLoaderOnConfirm: true,
    });

    this.ngOnInit();
  }

}
