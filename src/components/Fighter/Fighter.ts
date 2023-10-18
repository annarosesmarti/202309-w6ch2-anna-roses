import Character from "../Character/Character.js";
import { type FighterData } from "../../types.js";

class Fighter extends Character {
  weapon;
  dexterity;

  constructor(data: FighterData) {
    super(data);
    this.weapon = data.weapon;
    this.dexterity = data.dexterity;
  }

  protected communicate(): string {
    return `${super.communicate()} First I hit and then I ask`;
  }

  protected filterDexterity(dexterity: number): number {
    const minNumber = 0;
    const maxNumber = 10;
    if (dexterity < minNumber) {
      return minNumber;
    }

    if (dexterity > maxNumber) {
      return maxNumber;
    }

    return dexterity;
  }
}

export default Fighter;
