export interface IPokemon {
  id: number;
  name: string;
  types?: Type[];
  sprites?: Sprites;
}

export interface Types {
    slot: number;
    type: Type;
}

export interface Type {
    name: string;
    url: string;
}

export interface Sprites {
    other: {
      "official-artwork": {
        front_default: string;
      }
    };
}


