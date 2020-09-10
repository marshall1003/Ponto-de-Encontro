import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedidos } from './pedido.entity';
import { PedidoModule } from './pedido.module';
import { PrecosModule } from './precos.module';
import { Precos } from './precos.entity';

@Module({
  imports: [
    PedidoModule,
    PrecosModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'Luiz',
      password: 'yylnk340',
      database: 'transportation',
      entities: [Pedidos, Precos],
    }),
    ],
 
})

export class AppModule {}
