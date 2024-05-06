import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from '../models/pokemon.entity';

@Injectable()
export class PokemonsService {
  /**
   *
   */

  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
  ) {}
  /**
   *
   */

  async findAll(): Promise<Pokemon[]> {
    return await this.pokemonRepository.find();
  }
}
