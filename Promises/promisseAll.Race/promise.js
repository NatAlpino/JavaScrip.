// Promise síncrona:

const sumNumbers = () => {
    let result = 1 + 1 

    if (result === 2) {
        sucessCalback()
    } else {
        errorCalback()
    }
}

sucessCalback = () => {
    console.log("Yeah! Number 2!");
}

errorCalback = () => {
    console.log("Ops! Somenthing wrong.");
}

sumNumbers();

// promise assíncrona:

let result = new Promise((resolve, reject) => {
    let a = 1 + 1 
    if (a === 2) {
        resolve("Sucess")
    } else {
        reject("Failed")
    }
})

result.then((message) => {
    console.log("This is in the then " + message)
}).catch((err) => {
    console.log("This is in the catch " + err)
})



 
