import { Module } from '@nestjs/common';
import { BattlesService } from './services/battles.service';
import { BattlesController } from './controllers/battle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Battle } from './models/battle.entity';
import { Pokemon } from 'src/pokemon/models/pokemon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Battle, Pokemon])],
  providers: [BattlesService],
  controllers: [BattlesController],
})
export class BattlesModule {}
