
const InsertElementOfType = (type, amount, where) => {
    for (let i = 0; i < amount; i++) {
        let myElement = document.createElement(`${type}`);
        let myWhere = document.getElementsByClassName(`${where}`)[0];
        myElement.innerText = "Test"
        myWhere.appendChild(myElement);
        
        // document.getElementsByClassName(`${where}`).appendChild(myElement);
    }
}

const changeColor = (e, type) => {
    if (type === "click") {
        e.target.innerText = "I was clicked";
    } else if (type === "mouseout") {
        e.target.innerText = "I was hovered";
    }
};
// add listener to all buttons
const addListeners = (arr, type, fnc) => {
    arr.forEach(x => x.addEventListener(type, e => fnc(e, type)))
}


InsertElementOfType("button", 25, "wrapper");
const allButtons = document.querySelectorAll("button");
addListeners(allButtons, "click", changeColor);