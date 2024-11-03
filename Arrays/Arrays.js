//different types of loops



const animals = ["Cinder", "Fat Cat", "Charlie", "Tony", "Lexi"];
const files = ["home.jpg", "tether.png", "rain.svg", "icon.jpg"];


//for of loop
for (const animal of animals) {
    console.log(`Inside the for of loop: ${animal}`);
}


//classic for loop
for (let i = 0; i < animals.length; i++) {
    console.log(`Inside the for loop: ${animals[i]}`);
}


//use break to exit a for loop before its over
for (let i = 0; i < animals.length; i++) {
    if (animals[i] === "Charlie") {
        console.log("Found Charlie, breaking loop");
        break;
    }
}


//.map() iterates over each item in an array with the ability to modify it.

const excited = animals.map( x => {
    return x + "!";
})
console.log(excited); // prints excited animals!


//.filter() filters through an array to return a new array with modifications

const letterC = excited.filter(x => {
    if (x[0] == "C") {
        return true
    }
});
console.log(letterC);


const findFiles = (arr, extension) => {
    let foundFiles = arr.filter((file) => file.endsWith(extension))
    return foundFiles;
}

let jpegs = findFiles(files, ".jpg");
let svgs = findFiles(files, ".svg");
console.log(jpegs); // returns home.jpg & icon.jpg
console.log(svgs); // returns rain.svg


