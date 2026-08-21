const projectStatus = {
  PENDING: {
    description: "Pending Execution"
  },
  SUCCESS: {
    description: "Executed Successfully"
  },
  FAILURE: {
    description: "Execution Failed"
  }
}

class ProjectIdea {
  constructor (title, description) {
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }

  updateProjectStatus (newStatus) {
    this.status = newStatus;
  }
}

class ProjectIdeaBoard {
  constructor (title) {
    this.title = title;
    this.ideas = [];
  }

  pin (projectIdea) {
    this.ideas.push(projectIdea);
  }

  unpin (projectIdea) {
    this.ideas = this.ideas.filter(idea => idea !== projectIdea);
    return this.ideas;
  }

  count () {
    return this.ideas.length;
  }

  formatToString () {
    let newString = `${this.title} has ${this.count()} idea(s)\n`;
    this.ideas.forEach((idea) => {
      newString += `${idea.title} (${idea.status.description}) - ${idea.description}\n`
    })
    return newString;
  }
}

const test = new ProjectIdea("Smart Home System", "An integrated system to control lighting, temperature, and security devices remotely.");

const test2 = new ProjectIdeaBoard("Tech Projects Board");
test2.pin(test);

console.log(test2.formatToString())
