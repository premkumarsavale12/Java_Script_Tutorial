


let data = new Promise(function (resolve, reject) {

    setTimeout(() => {

        let API = "https://jsonplaceholder.typicode.com/posts";

        if (API) {
            resolve("My Promise Resolved....");

        }
        else {
            reject("My Promise is Rejected ....");

        }
    })
});

let d = data;

console.log(d);

data.then((resolve) => {
    console.log(resolve);

}).catch((reject) => {
    console.log(reject)
})