import type CharacterData from "../types/types";
import Character from "../Character/Character";

class King extends Character {
  yearsOfReign;

  constructor(characterData: CharacterData, yearsOfReign: number) {
    super(characterData);
    this.yearsOfReign = yearsOfReign;
  }

  protected communicate(): string {
    return `${super.communicate()}Everybody will die`;
  }
}

export default King;
