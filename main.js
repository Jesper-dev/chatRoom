function clg(object){
    console.log(object);
}

//* Grab the msg input and submit and form
const msg = document.querySelector("#msg");
// const submit = document.querySelector("#submit");
const form = document.querySelector("form");
let msgOutput = document.querySelector(".msg-output");

let msgValue = msg.value();

function addMsg(msgValue){
    let html = `
        <div>
            <p>${msgValue}</p>
        </div>
    `;

    //*Add the html to the msgOutput.
    msgOutput.innerHTML += html;
    
}

form.addEventListener("submit", (e) => {

    e.preventDefault();

    addMsg();
})