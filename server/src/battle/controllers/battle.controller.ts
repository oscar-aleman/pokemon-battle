import { Controller, Post, Body } from '@nestjs/common';
import { BattlesService } from '../services/battles.service';
import { BattlePlayersDto, BattleResponseDto } from '../dtos/battle.dto';

@Controller('battles')
export class BattlesController {
  /**
   *
   */
  constructor(private battlesService: BattlesService) {}

  @Post()
  getBattleResult(
    @Body() players: BattlePlayersDto,
  ): Promise<BattleResponseDto> {
    return this.battlesService.fight(players);
  }
}
