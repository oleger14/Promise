

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


fetch(url)
    .then((response) => {
        if (response.status >= 200 && response.status < 400) {
            return response.json();
        } else {
            console.log(`${response.statusText} : ${response.status} error`);
        }
    })
    .then((data) => {
        console.log(data)
    }).catch((error) => {
        console.log(error);
    })

let isLoading = true
sendForm().then((res) => {
    alert('ok')
}).catch((err) => {
    alert(`Ошибка: ${err.message}`)
}).finally(() => {
    isLoading = false
})
