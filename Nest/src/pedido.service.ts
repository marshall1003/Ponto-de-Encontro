import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Pedidos } from './pedido.entity';
import { Pedido } from './pedido.model';
import { Precos } from './precos.entity';
import { awaitExpression } from '@babel/types';
@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedidos)
    private readonly pedidoRepository: Repository<Pedidos>,
    @InjectRepository(Precos)
    private readonly precoRepository: Repository<Precos>) { }

  async create(pedido: Pedido): Promise<any> {
    let temp = await this.precoRepository.find({ produto: pedido.produto });

    pedido.precoun = temp.pop().precoun;
    pedido.precototal = pedido.precoun * pedido.quantidade;

    return await this.pedidoRepository.save(pedido);
  }

  async getTotalMesa(desk: number): Promise<number> {

    let total = 0;
    let consulta = await this.pedidoRepository.query("SELECT mesa, precototal from pedidos");

    consulta = consulta.filter(table => table.mesa == desk);
    consulta.forEach(temp => total += temp.precototal);

    return total;
  }
  async getTodasMesas(): Promise<any> {
    let temp = await this.pedidoRepository.query("SELECT DISTINCT mesa from pedidos");
    temp = temp.sort(function(a,b) {return a.mesa - b.mesa});
    return temp;
  }

  async getMesa(table: number): Promise<any> {
    return await this.pedidoRepository.find({ mesa: table });
  }

  async update(pedido: Pedido): Promise<UpdateResult> {
    return await this.pedidoRepository.update(pedido.id, pedido);
  }
  

  async deletePedido(table: number, prodid: number): Promise<any> {
    return await this.pedidoRepository.delete({ mesa: table, id: prodid });
  }

  async deleteMesa(table: number): Promise<any> {
    return this.pedidoRepository.delete({ mesa: table });
  }
}
