const poll = new Map();


const addOption = (option) => {
  if (!poll.has(option)) {
    if (!option) {
      return "Option cannot be empty.";
    }
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  }
  else {
    return `Option "${option}" already exists.`;
  }
}

const vote = (option, voterId) => {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`
  }
  else {
    const voteOpt = poll.get(option);
    if (voteOpt.has(voterId)) {
      return `Voter ${voterId} has already voted for "${option}".`
    }
    else {
      voteOpt.add(voterId);
      return `Voter ${voterId} voted for "${option}".`
    }
  }
}

addOption("Daniel");
addOption("Michael");
addOption("Godstime");
addOption("Victoria");


vote("Daniel", 1);
vote("Daniel", 2);
vote("Michael", 3);
vote("Godstime", 4);
vote("Daniel", 2);

const displayResults = () => {
  let str =  "Poll Results:\n";
  poll.forEach((value, key) => {
    str += (`${key}: ${value.size} votes\n`);
  })
  return str.trimEnd();
}
console.log(displayResults())
