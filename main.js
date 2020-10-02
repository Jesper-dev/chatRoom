function clg(object){
    console.log(object);
}

//* Grab the msg input and submit and form
const msg = document.querySelector("#msg");
// const submit = document.querySelector("#submit");
const form = document.querySelector("form");
let msgOutput = document.querySelector(".msg-output");



function addMsg(msgValue){
    let html = `
        <div class = "msg-text">
            <p>${msgValue}</p>
        </div>
    `;

    //*Add the html to the msgOutput.
    //* Adds it to the start/begining of the parent div (div in this case, can be child of anything)
    msgOutput.insertAdjacentHTML("afterbegin", html)
    
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let msgValue = form.msg.value;

    addMsg(msgValue);
    form.reset();
})