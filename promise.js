

let myPromise = new Promise(function (resolve, reject) {
    let x = 7;
    if (x == 0) {
        resolve("OK");
    } else {
        reject("Error");
    }
})
myPromise.then(
    result => alert("Fulfilled: " + result),
    error => alert("Rejected: " + error)
);

let myPromise = new Promise(function (resolve, reject) {
    let x = 7;
    if (x == 0) {
        resolve("OK");
    } else {
        reject("Error");
    }
}).catch(error => {
    alert(error);
});


