import { Module } from '@nestjs/common'
import { TournamentsModule } from './tournaments/tournaments.module'
import { PlayersModule } from './players/players.module';

@Module({
  imports: [TournamentsModule, PlayersModule],
  providers: [],
})
export class AppModule { }
