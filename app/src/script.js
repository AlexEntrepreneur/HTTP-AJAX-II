let time = 0;

function timeMachine() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(time += 1000);
        }, 1000);
    });    
}
// console.log(`Value of time: ${time}`);

timeMachine().then(timeValue => {
    console.log(`Value of time: ${timeValue}`);
});


// Creating a promise
// new Promise(function(resolve, reject) {
//     // Happy path
//     // Calculate the value we are looking for
//     resolve(value);

//     //Sad
//     reject(errorMessage);
// });