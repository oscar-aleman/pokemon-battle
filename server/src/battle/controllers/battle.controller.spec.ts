import { Test, TestingModule } from '@nestjs/testing';
import { BattlesController } from './battle.controller';

describe('BattlesController', () => {
  let controller: BattlesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BattlesController],
    }).compile();

    controller = module.get<BattlesController>(BattlesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
