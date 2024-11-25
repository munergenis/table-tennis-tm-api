export enum TournamentMode {
  BEST_OF_3 = 'BEST_OF_3',
  BEST_OF_5 = 'BEST_OF_5',
}

export enum TournamentStatus {
  QUALIFICATION = 'QUALIFICATION',
  ELIMINATION = 'ELIMINATION',
  FINISHED = 'FINISHED',
}

export class Tournament {
  id: string
  name: string
  tournamentMode: TournamentMode
  maxQualificationRounds: number
  maxEliminationRounds: number
  currentRoundNum: number
  status: TournamentStatus
  createdAt: Date
  date: Date
}
