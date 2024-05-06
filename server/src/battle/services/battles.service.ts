import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Battle } from '../models/battle.entity';
import {
  BattlePlayersDto,
  BattleResponseDto,
  CreateBattleDto,
} from '../dtos/battle.dto';
import { Pokemon } from '../../pokemon/models/pokemon.entity';
import { getWinner } from 'src/utils/util';

@Injectable()
export class BattlesService {
  /**
   *
   */
  constructor(
    @InjectRepository(Battle)
    private readonly battleRepository: Repository<Battle>,
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
  ) {}
  /**
   *
   */

  async fight(players: BattlePlayersDto): Promise<BattleResponseDto> {
    const playerLeft = await this.pokemonRepository.findOne({
      where: { id: players.leftId },
    });

    const playerRight = await this.pokemonRepository.findOne({
      where: { id: players.rightId },
    });

    const winner = getWinner(playerLeft, playerRight);
    const battle = new CreateBattleDto(
      playerLeft.id,
      playerRight.id,
      winner.id,
    );
    this.battleRepository.save(battle);

    return new BattleResponseDto(winner.id);
  }
}
