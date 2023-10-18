import Character from "../Character";
import { type AdvisorData } from "../../../types";

class Advisor extends Character {
  advises;

  constructor(data: AdvisorData) {
    super(data);

    if (data.advises instanceof Character) {
      this.advises = data.advises;
    }
  }

  communicate() {
    return `${super.communicate()}I have a funny feeling that I'm going to die`;
  }
}

export default Advisor;
