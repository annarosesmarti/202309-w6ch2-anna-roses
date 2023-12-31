import type { CharacterData } from "../../types.js";

abstract class Character {
  public characterData;
  private isAlive: boolean;
  private readonly series: string;

  constructor(data: CharacterData) {
    this.characterData = data;
    this.isAlive = true;
    this.series = "Game of Thrones";
  }

  protected communicate(): string {
    return `${this.characterData.name} says: `;
  }

  protected die(): void {
    this.isAlive = false;
  }
}

export default Character;
