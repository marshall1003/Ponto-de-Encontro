import { Controller, Get, Post, Param, Body, Put, Delete, Patch } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { Pedidos } from './pedido.entity';
import { Pedido } from './pedido.model';
import { identity } from 'rxjs';
import { DeleteResult } from 'typeorm';

@Controller('pedidos')
export class PedidoController {
  constructor(private readonly pedidoService:PedidoService) {}

  // CREATE
  @Post()
  async create(@Body() pedido: Pedido): Promise<Pedidos[]> {
    return this.pedidoService.create(pedido);
  }

  @Get()
  getTodasMesas(): Promise<any> {
    return this.pedidoService.getTodasMesas();
  }


  // QUERY
  @Get("query/:mesa")
  async getMesa(@Param('mesa') mesa): Promise<any> {
    const table = Number(mesa);
    return this.pedidoService.getMesa(table);
  }
  @Get("query/:mesa/total")
  async getTotalMesa(@Param('mesa') mesa): Promise<number> {
    const table = Number(mesa);
    return this.pedidoService.getTotalMesa(table);
  }

  /*@Get("query/produtos/:mesa")
  async getProdutos(@Param('mesa') mesa): Promise<any> {
    const table = Number(mesa);
    return this.pedidoService.getMesa(table);
  }*/
  
  @Post(":id/update")
  async update(@Param('id') id, @Body() pedido: Pedido): Promise<any> {
    pedido.id = Number(id);
    return this.pedidoService.update(pedido);
  }


  // DELETE
  @Post("query/:mesa/:id/delete")
  async deletePedido(@Param('mesa') mesa, @Param('id') id): Promise<any> {
    const idPedido = Number(id);
    const table = Number(mesa);
    return this.pedidoService.deletePedido(table, idPedido);
  }
  @Post("query/:mesa/delete")
  async deleteMesa(@Param('mesa') mesa: number): Promise<any> {
    const table = Number(mesa);
    return this.pedidoService.deleteMesa(table);
  }

}
