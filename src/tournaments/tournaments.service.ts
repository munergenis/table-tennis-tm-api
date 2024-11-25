import { Injectable } from '@nestjs/common'
import { CreateTournamentDto } from './dto/create-tournament.dto'
import { UpdateTournamentDto } from './dto/update-tournament.dto'
import { Tournament } from 'src/tournaments/entities/tournament.entity'
import { generateNewTournament } from 'src/tournaments/utils/utils'
import { TournamentsRepository } from 'src/tournaments/tournaments.repository'

@Injectable()
export class TournamentsService {
  constructor(private tournamentsRepository: TournamentsRepository) {}

  create(createTournamentDto: CreateTournamentDto) {
    const newTournament: Tournament = generateNewTournament(createTournamentDto)

    // Generar nou torneig
    console.log(this.tournamentsRepository.create(newTournament))

    // TODO - Match Service? - Generar Partits primera ronda
    //// TODO - Match Repository - Crear Partits

    // TODO - Player Service? - Generar Jugadors del torneig
    //// TODO - Player Repository - Crear Jugadors

    return 'This action adds a new tournament'
  }

  update(id: string, updateTournamentDto: UpdateTournamentDto) {
    // TODO - Provar
    console.log(
      this.tournamentsRepository.findAndUpdate(id, updateTournamentDto),
    )

    return `This action updates a #${id} tournament`
  }

  findAll() {
    // TODO - Provar
    console.log(this.tournamentsRepository.findAll())
    return 'This action retruns all tournaments'
  }

  findOne(id: string) {
    // TODO - Provar
    console.log(this.tournamentsRepository.findOne(id))
    return `This action returns a #${id} tournament`
  }

  // TODO - Definir propietat visible a tournament entity (a front serà opció archivar)
  // Si està en no visible es pot fer un delete
  // remove(id: string) {
  //   return `This action removes a #${id} tournament`
  // }
}
