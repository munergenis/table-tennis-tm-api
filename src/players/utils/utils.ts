import { CreatePlayerDto } from "../dto/create-player.dto";
import { Player } from "../entities/player.entity";

export function generateNewPlayer(tournamentId: string, playerNumber: number, createPlayerDto: CreatePlayerDto): Player {
  return {
    id: crypto.randomUUID(),
    tournamentId,
    name: createPlayerDto.name,
    club: createPlayerDto.club,
    playerNumber,
    initialOrder: null,
  }
}
