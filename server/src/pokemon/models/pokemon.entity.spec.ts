import { Pokemon } from './pokemon.entity';

describe('PokemonEntity', () => {
    it('should be defined', () => {
        expect(new Pokemon()).toBeDefined();
    })
})