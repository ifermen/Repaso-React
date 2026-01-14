import { useEffect, useState } from "react"
import type { Character } from "../types/Character"
import { characterService } from "../services/CharacterService";
import { CharacterCard } from "../components/CharacterCard";

export function Characters() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    characterService.getAllCharacters(charactersResponse => setCharacters(charactersResponse));
  }, [])
  return (
    <>
      <form>
      </form>
      <div className="container">
        <div className="row justify-content-center g-4">
          {characters.map(c => (
            <div key={c.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
              <CharacterCard character={c} />
            </div>
          ))}
        </div>
      </div>
    </>

  )
}