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

    newFriend = new Friend(nameValue, descValue);

    friendArr.push(newFriend);

    localStorage.setItem("Friends", JSON.stringify(friendArr));

    formFriend.reset();
});

//TODO: Jag ska fixa så att man kan ta data från local storage och visa uppd det
//TODO: Alltså man ska kunna se sina vänner

//! Måste parse på friendArr sen när jag ska skriva ut den





