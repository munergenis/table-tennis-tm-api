import { Type } from 'class-transformer'
import {
  IsString,
  IsNotEmpty,
  IsEnum,
  IsArray,
  ArrayMinSize,
  ValidateNested,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  Validate,
  IsDate,
} from 'class-validator'
import { TournamentMode } from 'src/tournaments/entities/tournament.entity'

@ValidatorConstraint({ name: 'IsMultipleOfFour', async: false })
class IsMultipleOfFour implements ValidatorConstraintInterface {
  validate(players: any[]) {
    return players.length % 4 === 0
  }

  defaultMessage() {
    return 'Players must be multiple of 4'
  }
}

class PlayerInput {
  @IsString()
  @IsNotEmpty()
  playerName: string

  @IsString()
  @IsNotEmpty()
  playerClub: string
}

export class CreateTournamentDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsEnum(TournamentMode, {
    message: `Tournament mode must be ${TournamentMode.BEST_OF_3} or ${TournamentMode.BEST_OF_5}`,
  })
  tournamentMode: TournamentMode

  @IsDate()
  @Type(() => Date)
  date: Date

  @IsArray()
  @ArrayMinSize(8, { message: 'There must be at least 8 players' })
  @Validate(IsMultipleOfFour)
  @ValidateNested({ each: true })
  @Type(() => PlayerInput)
  playersInput: PlayerInput[]
}
