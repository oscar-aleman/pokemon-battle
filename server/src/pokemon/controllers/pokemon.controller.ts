import { Controller, Get } from '@nestjs/common';
import { PokemonsService } from '../services/pokemons.service';
import { Pokemon } from '../models/pokemon.entity';

@Controller('pokemons')
export class PokemonsController {
  /**
   *
   */
  constructor(private pokemonsService: PokemonsService) {}

  @Get()
  getPokemons(): Promise<Pokemon[]> {
    return this.pokemonsService.findAll();
  }
}
