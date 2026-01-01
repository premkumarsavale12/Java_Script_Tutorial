let promises = new Promise((resolve, reject) => {

    setTimeout(() => {
        let API = true;

        if (API) {
            resolve("Promise Resolve....")
        }
        else {
            reject("Promise Rejected....")
        }
    }, 3000)

})

async function check() {


    let data = await promises;
    console.log("Executeeeee......")

    console.log(data);

}

check();
