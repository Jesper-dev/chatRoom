
const addFriendsWrapper = document.querySelector(".add-friends-wrapper");
const closeBtnAddFriends = document.querySelector(".close-btn-addFriends");
const addFriendsWindow = document.querySelector(".add-friends-window");
const formAddFriends = document.querySelector(".addFriends-form");
const addedFriendPopup = document.querySelector(".added-friend-popup");

class Friend {
    constructor(name, desc) {
        this.name = name;
        this.desc = desc;
        this.friends = db.collection("friends");
        this.unsub;
    }
    //*En metod där vi addar en vän.
    async addFriend(userFriend) {
        const now = new Date();
        const friend = {
            name: this.name,
            desc: this.desc,
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

        if (addFriendName.value === "") {
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

            friend = new Friend(friendName, friendDesc)
            friend.addFriend(friend)
                .then(() => formAddFriends.reset())
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