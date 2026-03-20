// BSB 2026 standings — updated after opening rounds
export const standings = [
  { pos: 1, riderName: "Tommy Bridewell",   team: "Oxford Racing Ducati",               bike: "Ducati Panigale V4 R", points: 0,  wins: 0, podiums: 0 },
  { pos: 2, riderName: "Bradley Ray",        team: "Yamaha bLU cRU",                     bike: "Yamaha YZF-R1",        points: 0,  wins: 0, podiums: 0 },
  { pos: 3, riderName: "Glenn Irwin",         team: "Honda Racing UK",                    bike: "Honda CBR1000RR-R",    points: 0,  wins: 0, podiums: 0 },
  { pos: 4, riderName: "Jason O'Halloran",   team: "McAMS Yamaha",                       bike: "Yamaha YZF-R1",        points: 0,  wins: 0, podiums: 0 },
  { pos: 5, riderName: "Josh Brookes",        team: "MCE Ducati",                         bike: "Ducati Panigale V4 R", points: 0,  wins: 0, podiums: 0 },
  { pos: 6, riderName: "Tarran Mackenzie",   team: "Yamaha bLU cRU",                     bike: "Yamaha YZF-R1",        points: 0,  wins: 0, podiums: 0 },
  { pos: 7, riderName: "Christian Iddon",    team: "VisionTrack Ducati",                 bike: "Ducati Panigale V4 R", points: 0,  wins: 0, podiums: 0 },
  { pos: 8, riderName: "Danny Buchan",        team: "SYNETIQ BMW Motorrad",               bike: "BMW M1000RR",          points: 0,  wins: 0, podiums: 0 },
  { pos: 9, riderName: "Kyle Ryde",           team: "RICH Energy OMG Racing",             bike: "BMW M1000RR",          points: 0,  wins: 0, podiums: 0 },
  { pos: 10, riderName: "Ryan Vickers",       team: "RAF Regular & Reserve Kawasaki",     bike: "Kawasaki ZX-10RR",     points: 0,  wins: 0, podiums: 0 },
  { pos: 11, riderName: "Leon Haslam",        team: "Zenith Suzuki",                      bike: "Suzuki GSX-R1000R",    points: 0,  wins: 0, podiums: 0 },
  { pos: 12, riderName: "Storm Stacey",       team: "Lee Hardy Racing Kawasaki",          bike: "Kawasaki ZX-10RR",     points: 0,  wins: 0, podiums: 0 },
];

// Round-by-round results (populated as season progresses)
export const roundResults = [];
// Each entry shape:
// {
//   round: 1,
//   venue: "Silverstone Circuit",
//   date: "26–27 April 2026",
//   race1: [{ pos, riderName, points }],
//   race2: [{ pos, riderName, points }],
//   race3: [{ pos, riderName, points }],
// }
