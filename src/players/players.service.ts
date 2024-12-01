import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PlayersRepository } from './players.repository';
import { generateNewPlayer } from './utils/utils';

@Injectable()
export class PlayersService {
  constructor(private playersRepository: PlayersRepository) { }
  create(tournamentId: string, playerNumber: number, createPlayerDto: CreatePlayerDto) {
    const newPlayer = generateNewPlayer(tournamentId, playerNumber, createPlayerDto)

    this.playersRepository.create(newPlayer)

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
