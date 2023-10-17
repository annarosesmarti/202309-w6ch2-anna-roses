import Character from "../Character/Character";
import { type FighterData } from "../types/types";

class Fighter extends Character {
  weapon;
  dexterity;

  constructor(data: FighterData) {
    super(data);
    this.weapon = data.weapon;
    this.dexterity = data.dexterity;
  }
}

export default Fighter;
