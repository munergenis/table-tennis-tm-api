import { Module } from '@nestjs/common'
import { TournamentsService } from './tournaments.service'
import { TournamentsController } from './tournaments.controller'
import { TournamentsRepository } from './tournaments.repository'

@Module({
  controllers: [TournamentsController],
  providers: [TournamentsService, TournamentsRepository],
})
export class TournamentsModule {}
