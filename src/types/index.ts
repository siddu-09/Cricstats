export interface Player {
  id: string;
  name: string;
  country: string;
  role: string;
  battingStyle: string;
  bowlingStyle: string;
  image: string;
  dateOfBirth: string;
  age: number;
  matches: {
    test: number;
    odi: number;
    t20i: number;
  };
  batting: {
    test: BattingStats;
    odi: BattingStats;
    t20i: BattingStats;
  };
  bowling: {
    test: BowlingStats;
    odi: BowlingStats;
    t20i: BowlingStats;
  };
}

export interface BattingStats {
  matches: number;
  innings: number;
  runs: number;
  highestScore: string;
  average: number;
  strikeRate: number;
  hundreds: number;
  fifties: number;
  fours: number;
  sixes: number;
}

export interface BowlingStats {
  matches: number;
  innings: number;
  wickets: number;
  bestFigures: string;
  average: number;
  economy: number;
  strikeRate: number;
  fiveWickets: number;
}

export type MatchFormat = "test" | "odi" | "t20i";