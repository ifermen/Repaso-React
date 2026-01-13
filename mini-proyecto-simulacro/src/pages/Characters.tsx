import { useEffect, useState } from "react"
import type { Character } from "../types/Character"
import { characterService } from "../services/CharacterService";

export function Characters() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    characterService.getAllCharacters(charactersResponse => setCharacters(charactersResponse));
  }, [])
  return (
    <>
      <h1>Personajes</h1>
      <table className="table">
        <thead className="table table-dark">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Género</th>
          </tr>
        </thead>
        <tbody>
          {characters.map(character => (
            <tr key={character.id}>
              <td>{character.id}</td>
              <td>{character.name}</td>
              <td>{character.status}</td>
              <td>{character.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}