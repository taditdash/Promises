let relevant = true;
let iAmonLeave = true;

// function attendLabsCallbackExample (callback, errorCallback) {
//   if(!relevant) {
//     callback("I won't attend");
//   } else if (iAmonLeave) {
//     errorCallback("I won't attend");
//   } else {
//     callback("I will atend")
//   }
// }

// attendLabsCallbackExample(function(message) {
//   console.log(message);
//   somethingelse(function(){
//   }, function(){
//   })
// }, function(error) {
//   console.log(error);
// });

function attendLabs() {
  return new Promise(function(resolve, reject) {
    try
    {
      // do a api call
      resolve("api call done");
    }
    catch(ex) {
      reject(ex);
    }

    setTimeout(function(){
      resolve("I will attend")
    }, 5000);

    // if(!relevant) {
    //   reject("I won't attend")
    // } else if(iAmonLeave) {
    //   reject("I won't attend")
    // }
    // else{
    //   resolve("I will attend")
    // }
  });
}

attendLabs()
 .then(function(message) {
   console.log(message);
 })
 .catch(function(error) {
   console.log(error);
 })