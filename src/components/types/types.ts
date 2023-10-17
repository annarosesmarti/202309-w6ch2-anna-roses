export interface CharacterData {
  name: string;
  person: string;
  age: number;
  imageSource: string;
}

export interface KingData extends CharacterData {
  yearsOfReign: number;
}
export interface FighterData extends CharacterData {
  weapon: string;
  dexterity: number;
}
