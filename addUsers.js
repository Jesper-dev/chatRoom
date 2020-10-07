//* Create the friend class
class Friend {
    constructor(name, desc) {
        this.name = name;
        this.desc = desc;
    }
}

let friendArr = [];

//*Get input fields
const name = document.querySelector("#name");
const desc = document.querySelector("textarea");

const formFriend = document.querySelector(".friendForm")

formFriend.addEventListener("submit", (e) => {
    e.preventDefault();

    let nameValue = formFriend.name.value;
    let descValue = formFriend.desc.value;

    let newFriend = new Friend(nameValue, descValue);
    friendArr.push(newFriend);

    formFriend.reset();
});