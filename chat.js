function clg(object) {
    console.log(object);
}

const showBtn = document.querySelector(".showBtn")
const hideBtn = document.querySelector(".hideBtn");
const addFriendBtnShow = document.querySelector(".addFriendBtn");
const container = document.querySelector(".containerMsg")
const addFriendContainer = document.querySelector(".containerAddFriend");

//* Grab the msg input and submit and form
const msg = document.querySelector("#msg");
// const submit = document.querySelector("#submit");
const form = document.querySelector("form");
let msgOutput = document.querySelector(".msg-output");
let msgInput = document.querySelector("#msg");


//****** TIME STUFF *******//

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
        addMsg(msgValue);
        msgInput.classList.remove("error");
    }
    msgInput.classList.remove("error");
    form.reset();
});

form.addEventListener("keyup", () => {
    if (msgInput.value == "") {
        msgInput.classList.add("error");
    } else {
        msgInput.classList.remove("error");
    }
});

showBtn.addEventListener("click", () => {
    container.classList.remove("hide");
    showBtn.classList.add("hide");
});

hideBtn.addEventListener("click", () => {
    container.classList.add("hide");
    showBtn.classList.remove("hide");
});

addFriendBtnShow.addEventListener("click", () => {
    addFriendBtnShow.classList.add("hide");
    addFriendContainer.classList.remove("hide");
});
