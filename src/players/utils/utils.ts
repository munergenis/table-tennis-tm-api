import { CreatePlayerDto } from "../dto/create-player.dto";
import { Player, PlayerInput } from "../entities/player.entity";

export function generateNewPlayer(tournamentId: string, playerNumber: number, playerInput: PlayerInput): Player {
  return {
    id: crypto.randomUUID(),
    tournamentId,
    name: playerInput.playerName,
    club: playerInput.playerClub,
    playerNumber,
    initialOrder: null,
  }
}
