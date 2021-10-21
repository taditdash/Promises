const relevant = true;
const iAmOnLeave = true;

// function attendLabs(callback, errorCallback) {
//   if(!relevant) {
//     // I will not attend
//     errorCallback("I will not attend as this is not relevant to me.")
//   } else if (iAmOnLeave) {
//     // I will not attend
//     errorCallback("I will not attend as I am on leave.")
//   } else {
//     // I will attend
//     callback("I will attend as I am not on leave and I have interest.")
//   }
// }

// attendLabs(function(message) {
//   console.log(message);
// },
// function(error) {
//   console.log(error);
// });

function attendLabs() {
  return new Promise((resolve, reject) => {
    if(!relevant) {
      // I will not attend
      reject("I will not attend as this is not relevant to me.")
    } else if (iAmOnLeave) {
      // I will not attend
      reject("I will not attend as I am on leave.")
    } else {
      // I will attend
      resolve("I will attend as I am not on leave and I have interest.")
    }
  })
}

attendLabs()
.then(function(message) {
  console.log(message);
})
.catch(function(error) {
  console.log(error);
});

