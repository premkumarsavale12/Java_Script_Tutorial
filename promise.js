
function Demo(callback) {

    setTimeout(() => {
        console.log("This is Demo Page...");
        callback();

    }, [2000])

}


function Simple(callback) {

    setTimeout(() => {
        console.log("This is Simple Page....");
        callback();

    }, [4200])


}

function Fast(callback) {
    setTimeout(() => {
        console.log("This is Fast Page....");
        callback();
    }, [2000]);


}

function Inventory(callback) {
    setTimeout(() => {
        console.log("This is Inventory Page... ");
        callback();

    }, [2000])


}

function Main() {
    Demo(() => {
        Simple();

    });
    Simple(() => {
        Inventory();

    });
    Fast(() => {
        console.log("Fast Function is Done..... ")
    });
    Inventory(() => {
        console.log("Inventory Function is Done.... ")
    });
    // console.log("Other Request Processing..... ")

}


Main();
