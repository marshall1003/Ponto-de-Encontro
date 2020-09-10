import { Controller, Get, Post, Param, Body, Put, Delete, Patch } from '@nestjs/common';
import { PrecosService } from './precos.service';
import { Precos } from './precos.entity';
import { Preco } from './precos.model';
import { identity } from 'rxjs';

@Controller('precos')
export class PrecosController {
  constructor(private readonly precosService: PrecosService) { }
  
  @Get("query")
  async getPrecos(): Promise<any> {
    return this.precosService.getPrecos();
  }
  @Post()
  async PostPreco(@Body() preco: Preco): Promise<Precos> {
    return this.precosService.PostPreco(preco);
  }

}
