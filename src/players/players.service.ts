import { Injectable } from '@nestjs/common';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PlayersRepository } from './players.repository';
import { generateNewPlayer } from './utils/utils';
import { Player, PlayerInput } from './entities/player.entity';

@Injectable()
export class PlayersService {
  constructor(private playersRepository: PlayersRepository) { }
  createPlayers(tournamentId: string, playersInput: PlayerInput[]) {
    const playersList: Player[] = []
    const playersLength = playersInput.length

    for (let i = 0; i < playersLength; i++) {
      const playerNumber = i + 1
      const newPlayer = generateNewPlayer(tournamentId, playerNumber, playersInput[i])
      playersList.push(newPlayer)
    }


    this.playersRepository.createPlayers(playersList)

    return 'This action adds a new player';
  }

  findAll() {
    return `This action returns all players`;
  }

  findOne(id: number) {
    return `This action returns a #${id} player`;
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return `This action updates a #${id} player`;
  }

  remove(id: number) {
    return `This action removes a #${id} player`;
  }
}
