import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedidos } from './pedido.entity';
import { Pedido } from './pedido.model';
import { Precos } from './precos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pedidos]), TypeOrmModule.forFeature([Precos])],
  providers: [PedidoService],
  controllers: [PedidoController]})
export class PedidoModule {}
