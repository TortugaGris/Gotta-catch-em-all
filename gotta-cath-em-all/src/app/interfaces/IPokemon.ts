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
  back_default?: string | null;
  back_female?: string | null;
  back_shiny?: string | null;
  back_shiny_female?: string | null;
  front_default?: string | null;
  front_female?: string | null;
  front_shiny?: string | null;
  front_shiny_female?: string | null;
  other: Other;
}

export interface Other {
  dream_world?: DreamWorld;
  home?: Home;
  'official-artwork': Artwork;
}

export interface Artwork {
  front_default: string | null;
}

export interface DreamWorld {
  front_default: string | null;
  front_female: string | null;
}

export interface Home {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}
