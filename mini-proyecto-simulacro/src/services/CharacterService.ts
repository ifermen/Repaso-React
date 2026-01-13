import type { Character } from "../types/Character";

export const characterService = {

  getAllCharacters(callback: ((character: Character[]) => void)) {
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => {
        if(response.ok){
          return response.json();
        }else{
          throw new Error("No se han encontrado personajes");
          
        }
      })
      .then(data => callback(data.results))
      .catch();
  },

  getCharacterById(id:string,callback: (character: Character) => void) {
    fetch("https://rickandmortyapi.com/api/character/" + id)
      .then(response => {
        if(response.ok){
          return response.json();
        }else{
          throw new Error("No se ha encontrado el personaje con id: " + id);
        }
      })
      .then(data => callback(data))
      .catch(error => console.log(error))
  }
};