// Points system: 1st=25, 2nd=20, 3rd=16, 4th=13, 5th=11, 6th=10, 7th=9, 8th=8, 9th=7, 10th=6,
//                11th=5, 12th=4, 13th=3, 14th=2, 15th=1

export const raceResults = [
  {
    round: 1,
    circuit: "Silverstone",
    race1: [
      { position: 1, riderId: 7, points: 25 },  // Tarran Mackenzie
      { position: 2, riderId: 10, points: 20 }, // Christian Iddon
      { position: 3, riderId: 1, points: 16 },  // Tommy Bridewell
      { position: 4, riderId: 5, points: 13 },  // Peter Hickman
      { position: 5, riderId: 3, points: 11 },  // Bradley Ray
      { position: 6, riderId: 12, points: 10 }, // Kyle Ryde
      { position: 7, riderId: 8, points: 9 },   // Josh Brookes
      { position: 8, riderId: 2, points: 8 },   // Glenn Irwin
      { position: 9, riderId: 4, points: 7 },   // Danny Buchan
      { position: 10, riderId: 6, points: 6 },  // Jason O'Halloran
    ],
    race2: [
      { position: 1, riderId: 10, points: 25 }, // Christian Iddon
      { position: 2, riderId: 7, points: 20 },  // Tarran Mackenzie
      { position: 3, riderId: 5, points: 16 },  // Peter Hickman
      { position: 4, riderId: 1, points: 13 },  // Tommy Bridewell
      { position: 5, riderId: 8, points: 11 },  // Josh Brookes
      { position: 6, riderId: 3, points: 10 },  // Bradley Ray
      { position: 7, riderId: 4, points: 9 },   // Danny Buchan
      { position: 8, riderId: 2, points: 8 },   // Glenn Irwin
      { position: 9, riderId: 12, points: 7 },  // Kyle Ryde
      { position: 10, riderId: 6, points: 6 },  // Jason O'Halloran
    ],
  },
  {
    round: 2,
    circuit: "Oulton Park",
    race1: [
      { position: 1, riderId: 1, points: 25 },  // Tommy Bridewell
      { position: 2, riderId: 5, points: 20 },  // Peter Hickman
      { position: 3, riderId: 7, points: 16 },  // Tarran Mackenzie
      { position: 4, riderId: 10, points: 13 }, // Christian Iddon
      { position: 5, riderId: 2, points: 11 },  // Glenn Irwin
      { position: 6, riderId: 8, points: 10 },  // Josh Brookes
      { position: 7, riderId: 3, points: 9 },   // Bradley Ray
      { position: 8, riderId: 4, points: 8 },   // Danny Buchan
      { position: 9, riderId: 12, points: 7 },  // Kyle Ryde
      { position: 10, riderId: 11, points: 6 }, // Ryan Vickers
    ],
    race2: [
      { position: 1, riderId: 1, points: 25 },  // Tommy Bridewell
      { position: 2, riderId: 7, points: 20 },  // Tarran Mackenzie
      { position: 3, riderId: 10, points: 16 }, // Christian Iddon
      { position: 4, riderId: 5, points: 13 },  // Peter Hickman
      { position: 5, riderId: 3, points: 11 },  // Bradley Ray
      { position: 6, riderId: 4, points: 10 },  // Danny Buchan
      { position: 7, riderId: 2, points: 9 },   // Glenn Irwin
      { position: 8, riderId: 8, points: 8 },   // Josh Brookes
      { position: 9, riderId: 12, points: 7 },  // Kyle Ryde
      { position: 10, riderId: 11, points: 6 }, // Ryan Vickers
    ],
  },
];

// Compute standings from results
export const standings = (() => {
  const totals = {};
  for (const round of raceResults) {
    for (const result of [...round.race1, ...round.race2]) {
      if (!totals[result.riderId]) {
        totals[result.riderId] = { points: 0, wins: 0, podiums: 0, racesScored: 0 };
      }
      totals[result.riderId].points += result.points;
      totals[result.riderId].racesScored += 1;
      if (result.position === 1) totals[result.riderId].wins += 1;
      if (result.position <= 3) totals[result.riderId].podiums += 1;
    }
  }
  return Object.entries(totals)
    .map(([riderId, stats]) => ({ riderId: Number(riderId), ...stats }))
    .sort((a, b) => b.points - a.points || b.wins - a.wins);
})();
