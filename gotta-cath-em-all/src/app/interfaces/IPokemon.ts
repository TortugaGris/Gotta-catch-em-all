export interface IPokemon {
  id: number;
  name: string;
  types?: Types[];
  sprites: Sprites;
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
  other: Other;
}

export interface Other {
  'official-artwork': Artwork;
}

export interface Artwork {
  front_default: string;
}

