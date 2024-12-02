import { BadRequestException, Injectable } from '@nestjs/common'
import { CreateTournamentDto } from './dto/create-tournament.dto'
import { UpdateTournamentDto } from './dto/update-tournament.dto'
import { Tournament } from 'src/tournaments/entities/tournament.entity'
import { generateNewTournament } from 'src/tournaments/utils/utils'
import { TournamentsRepository } from 'src/tournaments/tournaments.repository'
import { PlayersService } from 'src/players/players.service'
import { PlayerInput } from 'src/players/entities/player.entity'

@Injectable()
export class TournamentsService {
  constructor(
    private tournamentsRepository: TournamentsRepository,
    private playersService: PlayersService,
  ) { }

  create(createTournamentDto: CreateTournamentDto) {
    const newTournament: Tournament = generateNewTournament(createTournamentDto)

    // Enviar nou torneig a la base de dades
    // TODO - Quan faci la crida a la DB real, envoltar en trycatch
    this.tournamentsRepository.create(newTournament)

    // TODO - Revisar què passa si es genera un nou torneig i es puja a la DB,
    // però després falla la generació de partits o jusgadors?

    // TODO - Match Service? - Generar Partits primera ronda
    //// TODO - Match Repository - Crear Partits

    // TODO - Player Service? - Generar Jugadors del torneig
    const playersInput = createTournamentDto.playersInput

    this.playersService.createPlayers(newTournament.id, playersInput)

    return newTournament
  }

  update(id: string, updateTournamentDto: UpdateTournamentDto) {
    // TODO - Provar
    return this.tournamentsRepository.findAndUpdate(id, updateTournamentDto)
  }

  findAll() {
    // TODO - Provar
    return this.tournamentsRepository.findAll()
  }

  findOne(id: string) {
    // TODO - Provar
    return this.tournamentsRepository.findOne(id)
  }

  // TODO - Definir propietat visible a tournament entity (a front serà opció archivar)
  // Si està en no visible es pot fer un delete
  // remove(id: string) {
  //   return `This action removes a #${id} tournament`
  // }
}
