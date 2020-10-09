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

let friendsWrapper = document.querySelector(".friendsWrapper");

formFriend.addEventListener("submit", (e) => {
    e.preventDefault();

    let nameValue = formFriend.name.value;
    let descValue = formFriend.desc.value;

    newFriend = new Friend(nameValue, descValue);

    friendArr.push(newFriend);

    localStorage.setItem("Friends", JSON.stringify(friendArr));

    formFriend.reset();
});

//!Kanske behöver göra en custom string template med allting från object friend, eller så måste jag göra om hela koden
//!Vi får se :)