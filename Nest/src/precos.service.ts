import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Precos } from './precos.entity';
import { Preco } from './precos.model';

@Injectable()
export class PrecosService {

  constructor(
    @InjectRepository(Precos)
    private readonly precosRepository: Repository<Precos>, ) { }

  async getPrecos(): Promise<any> {
    return this.precosRepository.query("SELECT * from precos");
  }

  async PostPreco(preco: Preco): Promise<any> {
    return await this.precosRepository.save(preco);

  }

}
