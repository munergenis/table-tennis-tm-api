import { PartialType } from '@nestjs/mapped-types'
import { CreateTournamentDto } from './create-tournament.dto'
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { Type } from 'class-transformer'

export class UpdateTournamentDto extends PartialType(CreateTournamentDto) {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  date?: Date
}
