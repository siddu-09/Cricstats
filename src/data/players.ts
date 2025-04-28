import { Player } from '../types';

export const players: Player[] = [
  {
    id: "253802",
    name: "Virat Kohli",
    country: "India",
    role: "Batter",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm medium",
    image: "https://images.pexels.com/photos/5657432/pexels-photo-5657432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "November 5, 1988",
    age: 36,
    matches: {
      test: 113,
      odi: 292,
      t20i: 115
    },
    batting: {
      test: {
        matches: 113,
        innings: 191,
        runs: 8848,
        highestScore: "254*",
        average: 49.15,
        strikeRate: 55.7,
        hundreds: 29,
        fifties: 29,
        fours: 966,
        sixes: 24
      },
      odi: {
        matches: 292,
        innings: 280,
        runs: 13848,
        highestScore: "183",
        average: 58.7,
        strikeRate: 93.6,
        hundreds: 50,
        fifties: 72,
        fours: 1277,
        sixes: 156
      },
      t20i: {
        matches: 115,
        innings: 107,
        runs: 4008,
        highestScore: "122*",
        average: 52.7,
        strikeRate: 137.8,
        hundreds: 1,
        fifties: 37,
        fours: 356,
        sixes: 118
      }
    },
    bowling: {
      test: {
        matches: 113,
        innings: 10,
        wickets: 0,
        bestFigures: "0/0",
        average: 0,
        economy: 4.8,
        strikeRate: 0,
        fiveWickets: 0
      },
      odi: {
        matches: 292,
        innings: 50,
        wickets: 4,
        bestFigures: "1/15",
        average: 166.2,
        economy: 6.2,
        strikeRate: 161.5,
        fiveWickets: 0
      },
      t20i: {
        matches: 115,
        innings: 10,
        wickets: 0,
        bestFigures: "0/0",
        average: 0,
        economy: 8.2,
        strikeRate: 0,
        fiveWickets: 0
      }
    }
  },
  {
    id: "422108",
    name: "Joe Root",
    country: "England",
    role: "Batter",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm off break",
    image: "https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "December 30, 1990",
    age: 34,
    matches: {
      test: 142,
      odi: 161,
      t20i: 32
    },
    batting: {
      test: {
        matches: 142,
        innings: 261,
        runs: 12537,
        highestScore: "254",
        average: 50.8,
        strikeRate: 56.9,
        hundreds: 31,
        fifties: 62,
        fours: 1356,
        sixes: 33
      },
      odi: {
        matches: 161,
        innings: 153,
        runs: 6311,
        highestScore: "133*",
        average: 48.9,
        strikeRate: 86.8,
        hundreds: 16,
        fifties: 39,
        fours: 548,
        sixes: 47
      },
      t20i: {
        matches: 32,
        innings: 30,
        runs: 893,
        highestScore: "90*",
        average: 35.7,
        strikeRate: 126.7,
        hundreds: 0,
        fifties: 5,
        fours: 75,
        sixes: 31
      }
    },
    bowling: {
      test: {
        matches: 142,
        innings: 89,
        wickets: 48,
        bestFigures: "5/8",
        average: 54.5,
        economy: 3.6,
        strikeRate: 89.9,
        fiveWickets: 1
      },
      odi: {
        matches: 161,
        innings: 35,
        wickets: 29,
        bestFigures: "3/52",
        average: 54.3,
        economy: 5.9,
        strikeRate: 54.6,
        fiveWickets: 0
      },
      t20i: {
        matches: 32,
        innings: 6,
        wickets: 6,
        bestFigures: "2/9",
        average: 35.5,
        economy: 8.1,
        strikeRate: 26.3,
        fiveWickets: 0
      }
    }
  },
  {
    id: "311158",
    name: "Kane Williamson",
    country: "New Zealand",
    role: "Batter",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm off break",
    image: "https://images.pexels.com/photos/8857177/pexels-photo-8857177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "August 8, 1990",
    age: 34,
    matches: {
      test: 98,
      odi: 161,
      t20i: 87
    },
    batting: {
      test: {
        matches: 98,
        innings: 174,
        runs: 8942,
        highestScore: "251",
        average: 54.9,
        strikeRate: 51.4,
        hundreds: 29,
        fifties: 33,
        fours: 967,
        sixes: 22
      },
      odi: {
        matches: 161,
        innings: 155,
        runs: 6721,
        highestScore: "148",
        average: 48.4,
        strikeRate: 82.1,
        hundreds: 13,
        fifties: 45,
        fours: 556,
        sixes: 54
      },
      t20i: {
        matches: 87,
        innings: 83,
        runs: 2464,
        highestScore: "95",
        average: 33.7,
        strikeRate: 124.1,
        hundreds: 0,
        fifties: 17,
        fours: 223,
        sixes: 58
      }
    },
    bowling: {
      test: {
        matches: 98,
        innings: 30,
        wickets: 29,
        bestFigures: "4/44",
        average: 40.8,
        economy: 3.5,
        strikeRate: 70.2,
        fiveWickets: 0
      },
      odi: {
        matches: 161,
        innings: 25,
        wickets: 36,
        bestFigures: "4/22",
        average: 33.4,
        economy: 5.2,
        strikeRate: 38.1,
        fiveWickets: 0
      },
      t20i: {
        matches: 87,
        innings: 9,
        wickets: 6,
        bestFigures: "2/16",
        average: 30.2,
        economy: 7.1,
        strikeRate: 25.5,
        fiveWickets: 0
      }
    }
  },
  {
    id: "381471",
    name: "Babar Azam",
    country: "Pakistan",
    role: "Batter",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm off break",
    image: "https://images.pexels.com/photos/2570244/pexels-photo-2570244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "October 15, 1994",
    age: 30,
    matches: {
      test: 53,
      odi: 111,
      t20i: 113
    },
    batting: {
      test: {
        matches: 53,
        innings: 97,
        runs: 3898,
        highestScore: "196",
        average: 43.3,
        strikeRate: 54.3,
        hundreds: 9,
        fifties: 26,
        fours: 468,
        sixes: 14
      },
      odi: {
        matches: 111,
        innings: 109,
        runs: 5729,
        highestScore: "158",
        average: 56.7,
        strikeRate: 88.9,
        hundreds: 19,
        fifties: 31,
        fours: 532,
        sixes: 40
      },
      t20i: {
        matches: 113,
        innings: 110,
        runs: 3987,
        highestScore: "122",
        average: 41.1,
        strikeRate: 128.8,
        hundreds: 3,
        fifties: 33,
        fours: 432,
        sixes: 58
      }
    },
    bowling: {
      test: {
        matches: 53,
        innings: 0,
        wickets: 0,
        bestFigures: "0/0",
        average: 0,
        economy: 0,
        strikeRate: 0,
        fiveWickets: 0
      },
      odi: {
        matches: 111,
        innings: 0,
        wickets: 0,
        bestFigures: "0/0",
        average: 0,
        economy: 0,
        strikeRate: 0,
        fiveWickets: 0
      },
      t20i: {
        matches: 113,
        innings: 0,
        wickets: 0,
        bestFigures: "0/0",
        average: 0,
        economy: 0,
        strikeRate: 0,
        fiveWickets: 0
      }
    }
  },
  {
    id: "219889",
    name: "Jasprit Bumrah",
    country: "India",
    role: "Bowler",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm fast",
    image: "https://images.pexels.com/photos/4159042/pexels-photo-4159042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "December 6, 1993",
    age: 31,
    matches: {
      test: 38,
      odi: 84,
      t20i: 62
    },
    batting: {
      test: {
        matches: 38,
        innings: 45,
        runs: 239,
        highestScore: "31*",
        average: 6.8,
        strikeRate: 29.8,
        hundreds: 0,
        fifties: 0,
        fours: 30,
        sixes: 6
      },
      odi: {
        matches: 84,
        innings: 27,
        runs: 19,
        highestScore: "10*",
        average: 4.8,
        strikeRate: 39.6,
        hundreds: 0,
        fifties: 0,
        fours: 1,
        sixes: 0
      },
      t20i: {
        matches: 62,
        innings: 9,
        runs: 6,
        highestScore: "3",
        average: 2.0,
        strikeRate: 42.9,
        hundreds: 0,
        fifties: 0,
        fours: 0,
        sixes: 0
      }
    },
    bowling: {
      test: {
        matches: 38,
        innings: 69,
        wickets: 159,
        bestFigures: "6/27",
        average: 20.3,
        economy: 2.7,
        strikeRate: 45.2,
        fiveWickets: 8
      },
      odi: {
        matches: 84,
        innings: 83,
        wickets: 149,
        bestFigures: "6/19",
        average: 23.3,
        economy: 4.5,
        strikeRate: 30.8,
        fiveWickets: 3
      },
      t20i: {
        matches: 62,
        innings: 62,
        wickets: 77,
        bestFigures: "3/11",
        average: 20.9,
        economy: 6.5,
        strikeRate: 19.2,
        fiveWickets: 0
      }
    }
  }
];