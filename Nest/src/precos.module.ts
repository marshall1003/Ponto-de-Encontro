import { Module } from '@nestjs/common';
import { PrecosService } from './precos.service';
import { PrecosController } from './precos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Precos } from './precos.entity';
import { Preco } from './precos.model';

@Module({
  imports: [TypeOrmModule.forFeature([Precos])],
  providers: [PrecosService],
  controllers: [PrecosController]})
export class PrecosModule {}
