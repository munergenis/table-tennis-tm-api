import { Module } from '@nestjs/common'
import { TournamentsService } from './tournaments.service'
import { TournamentsController } from './tournaments.controller'
import { TournamentsRepository } from './tournaments.repository'
import { PlayersService } from 'src/players/players.service'
import { PlayersRepository } from 'src/players/players.repository'

@Module({
  controllers: [TournamentsController],
  providers: [TournamentsService, TournamentsRepository, PlayersService, PlayersRepository],
})
export class TournamentsModule { }
