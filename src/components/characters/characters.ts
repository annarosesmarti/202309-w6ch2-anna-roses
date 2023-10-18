import King from "../King/King";
import Fighter from "../Fighter/Fighter";
import Squire from "../Squire/Squire";
import Advisor from "../Character/Advisor/Advisor";

const joffreyCharacterData = {
  id: 1,
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  imageSource: "joffrey.jpg",
  yearsOfReign: 2,
};

const joffrey = new King(joffreyCharacterData);

const jaimeCharacterData = {
  id: 2,
  name: "Jaime",
  family: "Lannister",
  age: 45,
  imageSource: "jaime.jpg",
  weapon: "sword",
  dexterity: 7,
};

const jaime = new Fighter(jaimeCharacterData);

const daenerysCharacterData = {
  id: 3,
  name: "Daenerys",
  family: "Targaryen",
  age: 30,
  imageSource: "daenerys.jpg",
  weapon: "Dragons",
  dexterity: 10,
};

const daenerys = new Fighter(daenerysCharacterData);

const tyrionCharacterData = {
  id: 4,
  name: "Tyrion",
  family: "Lannister",
  age: 40,
  imageSource: "tyrion.jpg",
  advises: daenerys,
};

const tyrion = new Advisor(tyrionCharacterData);

const bronnCharacterData = {
  id: 5,
  name: "Bronn",
  family: "Blackwater",
  age: 54,
  imageSource: "bronn.jpg",
  kissAssLevel: 0,
  serves: jaime,
};

const bronn = new Squire(bronnCharacterData);

export const characters = [jaime, joffrey, daenerys, tyrion, bronn];
