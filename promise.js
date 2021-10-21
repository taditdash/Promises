// Basics
let teamMateName = "Tadit"

let deliverLabTalk = new Promise((resolve, reject) => {
  switch(teamMateName) {
    case "Tadit":
      resolve({
        "name": teamMateName,
        "status": "Delivered"
      });
      break;
    case "Nav":
      reject({
        "name": teamMateName,
        "status": "Not Delivered"
      })
      break;
  }
});

deliverLabTalk
  .then((res) => {
    console.log(res.status);
    return res.name;
  })
  .then((name) => {
    console.log("Let's give " + name + " a reward");
  })
  .catch((error) => {
    console.log(error.name + " wil get a punishment");
  })


// Parallel and Single
let logTimePromise = new Promise((resolve, reject) => {
  resolve("Jira Time Log Promise Kept");
});

let pairProgrammingPromise = new Promise((resolve, reject) => {
  resolve("Pair Programming Promise Kept");
});

let cccPromise = new Promise((resolve, reject) => {
  resolve("CCC calls Promise Kept");
});

Promise
  .all([logTimePromise, pairProgrammingPromise, cccPromise])
  .then((messages) => {
    console.log(messages);
  });

Promise
  .race([logTimePromise, pairProgrammingPromise, cccPromise])
  .then((messages) => {
    console.log(messages);
  });