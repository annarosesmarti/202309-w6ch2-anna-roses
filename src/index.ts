import App from "./components/App/App.js";
import Card from "./components/Card/Card.js";
import { characters } from "./components/characters/characters.js";

const appClass = document.querySelector(".app")!;
const divContainer = new App(appClass, "div", "container");
divContainer.render();

const container = document.querySelector(".container")!;
const unorderList = new App(
  container,
  "ul",
  "characters-list row list-unstyled",
);
unorderList.render();

const characterList = document.querySelector(".character-list")!;

characters.forEach((character) => {
  const card = new Card(characterList, "li", "col", character.characterData);
  card.render();
});
