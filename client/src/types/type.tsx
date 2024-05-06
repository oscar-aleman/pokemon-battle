export type TPokemon = {
    id:  string;
    name: string;
    attack: number;
    defense: number;
    hp: number;
    speed:  number;
    type: string;
    imageUrl: string;
}

export type TWinnerResponse = {
    winnerId: string
}