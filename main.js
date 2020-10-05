function clg(object) {
    console.log(object);
}

//* Grab the msg input and submit and form
const msg = document.querySelector("#msg");
// const submit = document.querySelector("#submit");
const form = document.querySelector("form");
let msgOutput = document.querySelector(".msg-output");
let msgInput = document.querySelector("#msg");


//* TIME STUFF *//


//* Adda message to msgOutput div
function addMsg(msgValue) {

    let html = `
        <div class = "msg-text">
            <p>${msgValue}</p>
            <span></span>
        </div>
    `;

    //* Add the html to the msgOutput.
    //* Adds it to the start/begining of the parent div (div in this case, can be child of anything)
    msgOutput.insertAdjacentHTML("afterbegin", html)

}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (msgInput.value == "") {
        msgInput.classList.add("error");
    } else {
        let msgValue = form.msg.value;
        msgInput.classList.remove("error");
        addMsg(msgValue);
    }

    form.reset();
});

form.addEventListener("keyup", () => {
    if (msgInput.value == "") {
        msgInput.classList.add("error");
    } else {
        msgInput.classList.remove("error");
    }
});


