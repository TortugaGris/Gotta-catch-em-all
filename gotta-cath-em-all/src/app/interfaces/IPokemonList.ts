export interface IPokemonList {
  count: number;
  next?: null | string;
  previous?: null | string;
  results: Array<IPokemonURL>;
}

export interface IPokemonURL {
  name?: string;
  url: string;
}
