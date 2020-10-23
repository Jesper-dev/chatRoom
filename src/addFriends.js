
const addFriendsWrapper = document.querySelector(".add-friends-wrapper");
const closeBtnAddFriends = document.querySelector(".close-btn-addFriends");
const addFriendsWindow = document.querySelector(".add-friends-window");
const formAddFriends = document.querySelector(".addFriends-form");
const addedFriendPopup = document.querySelector(".added-friend-popup");

import firebase from "firebase/app"
require("firebase/firestore");
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
    apiKey: "AIzaSyB5yCQqg5i2tPImOwD1z3fadoN1wO1O2XM",
    authDomain: "chatroom-9bbc1.firebaseapp.com",
    projectId: "chatroom-9bbc1",
    databaseURL: "https://chatroom-9bbc1.firebaseio.com",
    storageBucket: "chatroom-9bbc1.appspot.com",
    messagingSenderId: "698059988244",
    appId: "1:698059988244:web:dfae71f9eb1214c1f87601",
    measurementId: "G-8Z2Z9YVHVL"
})

let db = firebase.firestore();

class User {
    constructor(name, desc) {
        this.name = name;
        this.desc = desc;
        this.friends = db.collection("friends");
        this.unsub;
    }
    //*En metod där vi addar en vän.
    async addFriend(friendName, friendDesc) {
        const now = new Date();
        const newFriend = {
            friendName,
            friendDesc,
            added_at: firebase.firestore.Timestamp.fromDate(now)
        };

        const response = await this.friends.add(newFriend);
        return response;
    }

    //*En metod där vi hämtar vänner.
    getFriends(callback) {
        this.unsub = this.friends
            .orderBy("added_at")
            .onSnapchot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type === "added") {
                        callback(change.doc.data());
                    }
                })
            })
    }
}

function addFriends() {

    formAddFriends.addEventListener("submit", e => {

        e.preventDefault()

        if (formAddFriends.name.value === " ") {
            let html = `
                <span class="error">Name is empty</span>
            `;

            addedFriendPopup.innerHTML += html;

            setTimeout(() => {
                addedFriendPopup.innerHTML = "";
            }, 3000)

            formAddFriends.reset()
        } else {
            let newFriendName = formAddFriends.name.value.trim();
            let newFriendDesc = formAddFriends.desc.value.trim();

            //user.addFriend(newFriendName, newFriendDesc)
            //.then(() => formAddFriends.reset())
            //.catch(err => console.log(err));
        }

    })
}


function closeAddFriends() {
    closeBtnAddFriends.addEventListener("click", () => {
        addFriendsWindow.classList.add("hideMe");
        formAddFriends.classList.add("hideMe");
        closeBtnAddFriends.classList.add("hideMe");

        addFriendsWrapper.classList.add("close-tab");
        setTimeout(() => {
            addFriendsWrapper.classList.add("hideMe");
        }, 1000)

    });
}

//*Class instances
let user = new User("Jesper", "King")

export { closeAddFriends, addFriends }