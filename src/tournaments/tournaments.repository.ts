import { Injectable, NotFoundException } from '@nestjs/common'
import { UpdateTournamentDto } from 'src/tournaments/dto/update-tournament.dto'
import { Tournament } from 'src/tournaments/entities/tournament.entity'

@Injectable()
export class TournamentsRepository {
  tournaments: Tournament[] = []

  create(tournament: Tournament) {
    this.tournaments.push(tournament)
    return tournament
  }

  findOne(id: string) {
    return this.tournaments.find((t) => t.id === id)
  }

  findAll() {
    return this.tournaments
  }

  findAndUpdate(id: string, updateTournamentDto: UpdateTournamentDto) {
    const tournamentIndex = this.tournaments.findIndex((t) => t.id === id)

    if (tournamentIndex < 0)
      return new NotFoundException(`Tournament #${id} not found`)

    this.tournaments[tournamentIndex] = {
      ...this.tournaments[tournamentIndex],
      ...updateTournamentDto,
    }
    return this.tournaments[tournamentIndex]
  }
}
