import { Pokemon } from 'src/pokemon/models/pokemon.entity';

export function getFirstAttacker(playerLeft: Pokemon, playerRight: Pokemon) {
  if (playerLeft.speed !== playerRight.speed) {
    return playerLeft.speed > playerRight.speed ? playerLeft : playerRight;
  }

  if (playerLeft.attack !== playerRight.attack) {
    return playerLeft.attack > playerRight.attack ? playerLeft : playerRight;
  }

  if (playerLeft.attack !== playerRight.attack) {
    return playerLeft.attack > playerRight.attack ? playerLeft : playerRight;
  }

  return playerLeft;
}

export function getWinner(playerLeft: Pokemon, playerRight: Pokemon) {
  let attacker = getFirstAttacker(playerLeft, playerRight);
  let defenser = attacker.id === playerLeft.id ? playerLeft : playerRight;

  while (attacker.hp > 0 && defenser.hp > 0) {
    const power =
      attacker.attack - defenser.defense < 1
        ? 1
        : attacker.attack - defenser.defense;

    defenser['hp'] = defenser.hp - power;
    const _pokemon = attacker;
    attacker = defenser;
    defenser = _pokemon;
  }

  return attacker.hp > 0 ? attacker : defenser;
}
