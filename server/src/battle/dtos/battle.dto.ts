import { IsNotEmpty } from 'class-validator';

export class BattlePlayersDto {
  @IsNotEmpty()
  leftId: string;

  @IsNotEmpty()
  rightId: string;
}

export class BattleResponseDto {
  constructor(id: string) {
    this.winnerId = id;
  }
  public winnerId: string;
}

export class CreateBattleDto {
  constructor(player1Id: string, player2Id: string, win: string) {
    this.player1Id = player1Id;
    this.player2Id = player2Id;
    this.win = win;
  }

  @IsNotEmpty()
  player1Id: string;

  @IsNotEmpty()
  player2Id: string;

  @IsNotEmpty()
  win: string;
}
