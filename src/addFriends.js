
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

class Friend {
    constructor(name, desc) {
        this.name = name;
        this.desc = desc;
        this.friends = db.collection("friends");
        this.unsub;
    }
    //*En metod där vi addar en vän.
    async addFriend(friendName, friendDesc) {
        const now = new Date();
        const friend = {
            friendName: this.friendName,
            friendDesc: this.friendDesc,
            added_at: firebase.firestore.Timestamp.fromDate(now)
        };

        const response = await this.friends.add(friend);
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

        } else {

            let friendName = formAddFriends.name.value.trim();
            let friendDesc = formAddFriends.desc.value.trim();

            let newFriend = new Friend(friendName, friendDesc)

            newFriend.addFriend(friendName, friendDesc)
            db.collection("friends").add({
                newFriend
            })
                .catch(err => console.log(err));

            let html = `
                <span class="success">${friendName} just got added as a friend!</span>
            `;

            addedFriendPopup.innerHTML += html;

            setTimeout(() => {
                addedFriendPopup.innerHTML = "";
            }, 3000)
        }

        formAddFriends.reset();
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



export { closeAddFriends, addFriends }