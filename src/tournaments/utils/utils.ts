import { CreateTournamentDto } from 'src/tournaments/dto/create-tournament.dto'
import { TournamentStatus } from 'src/tournaments/entities/tournament.entity'

function getMaxQualificationRounds(numOfPlayers: number) {
  return Math.floor(Math.log2(numOfPlayers))
}

function getMaxEliminationRounds(numOfPlayers: number) {
  if (numOfPlayers % 4 !== 0) {
    throw new Error('Players must be multiple of 4')
  }
  if (numOfPlayers < 8) {
    throw new Error('Players must be at least 8')
  }

  if (numOfPlayers === 8) {
    return 2
  } else if (numOfPlayers <= 20) {
    return 3
  } else {
    return 4
  }
}

export function generateNewTournament(
  createTournamentDto: CreateTournamentDto,
) {
  const numOfPlayers = createTournamentDto.playersInput.length
  return {
    id: crypto.randomUUID(),
    name: createTournamentDto.name,
    tournamentMode: createTournamentDto.tournamentMode,
    maxQualificationRounds: getMaxQualificationRounds(numOfPlayers),
    maxEliminationRounds: getMaxEliminationRounds(numOfPlayers),
    currentRoundNum: 0,
    status: TournamentStatus.QUALIFICATION,
    date: new Date(createTournamentDto.date),
    createdAt: new Date(),
  }
}
