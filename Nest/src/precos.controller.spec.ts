import { Test, TestingModule } from '@nestjs/testing';
import { PrecosController } from './precos.controller';

describe('Precos Controller', () => {
  let controller: PrecosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrecosController],
    }).compile();

    controller = module.get<PrecosController>(PrecosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
