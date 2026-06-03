const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

function flattenPlaylists (array) {
  if (!(Array.isArray(array))) {
    return [];
  }
  const newArray = [];
  for (let i = 0; i< array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      array[i][j]["source"] = [i, j];
      newArray.push(array[i][j]);
    }
  }
  return newArray;
}

function scoreTracks(array) {
  //accepts an array of track objects as returned by flattenPlaylists
  const flattenplaylist = [];
  for (let i = 0; i < array.length; i++) {
    array[i]["score"] = array[i]["votes"] * 10 - Math.abs(array[i]["bpm"] - 120);
    flattenplaylist.push(array[i]);
  }
  return flattenplaylist;
}

function dedupeTracks(array) {
  //accepts an array of track objects as returned by scoreTracks and returns a new array with duplicate trackId entries removed, keeping only the first occurrence of each.
  const newArray = [];
  const trackIdSet = new Set(array.map(arr => arr.trackId));
  let arrayId = [...trackIdSet];
  for (let arr of array) {
   if (arr.trackId === arrayId[0]) {
    newArray.push(arr);
    arrayId.shift();
   }
  }
  return newArray;
}

function enforceArtistQuota(array, num) {
  //accepts an array of track objects as returned by dedupeTracks and a number representing the maximum allowed occurrences per artist. The function should return a new array where no artist appears more times than the given number, keeping the earliest occurrences.
  const newArray = [];
  const artistArraySet = new Set(array.map(art => art.artist));
  const artistArray = [...artistArraySet];
  for (let arr of array) {
    let i = 0;
    while (i < num && arr.artist === artistArray[0]) {
      newArray.push(arr);
      i++;
    }
    artistArray.shift();
  }
  return newArray;
}

function buildSchedule(array) {
  //accepts an array of track objects as returned by enforceArtistQuota and returns a new array of { slot, trackId } objects, where slot is a 1-based index representing each track's position in the broadcast order.
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    let schedule = {"slot": i + 1,
    "trackId": array[i]["trackId"]};
    newArray.push(schedule);
  }
  return newArray;
}

function remixPlaylist(array, maxNum) {
  //a function named remixPlaylist that accepts an array of playlists and the maximum number of allowed occurrences per artist. The function returns the final broadcast schedule as an array of { slot, trackId } objects, by calling flattenPlaylists, scoreTracks, dedupeTracks, enforceArtistQuota, and buildSchedule in order.
  const flattened = flattenPlaylists(array);
  const scored = scoreTracks(flattened);
  const deduped = dedupeTracks(scored);
  const quotaApplied = enforceArtistQuota(deduped, maxNum);
  const schedule = buildSchedule(quotaApplied);
  return schedule;
}
