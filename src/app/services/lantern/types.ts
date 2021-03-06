export interface ILantern {
  id?: string | number;
  avatarId: number;
  name: string;
  description: string,
  age: string;
  bornIn: string;
  zones: Array<string>;
  isFavorite: boolean;
}
