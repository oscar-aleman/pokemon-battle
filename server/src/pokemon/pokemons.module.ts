import { Module } from '@nestjs/common';
import { PokemonsService } from './services/pokemons.service';
import { PokemonsController } from './controllers/pokemon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './models/pokemon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon])],
  providers: [PokemonsService],
  controllers: [PokemonsController],
})
export class PokemonsModule {}
