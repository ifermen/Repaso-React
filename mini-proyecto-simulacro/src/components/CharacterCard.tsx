import type { Character } from "../types/Character"

interface CharacterCardProps {
  character: Character
}
export function CharacterCard({ character }: CharacterCardProps) {

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
      </div>
      <img
        src={character.image}
        className="card-img-bottom"
        alt={`Imagen de ${character.name}`} />
    </div>
  )
}