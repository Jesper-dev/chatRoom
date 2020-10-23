import user from "./addFriends";
import { db } from "./addFriends"

const friendsWrapper = document.querySelector(".friends-wrapper");
const closeBtnFriends = document.querySelector(".close-btn-friends");
const friendsWindow = document.querySelector(".friends-window");

class FriendUI {
    constructor(list) {
        this.list = list;
    }

    render(data) {
        const when = dateFns.distanceInWordsToNow(data.added_at.toDate(), { addSuffix: true })

        const html = `
            <li class="list-group-item">
                <span class="username">${data.friendName}</span>
                <span class="message">${data.friendDesc}</span>
                <div class="time">${when}</div>
            </li>
        `;

        this.list.innerHTML += html;
    }
}


function closeFriends() {
    closeBtnFriends.addEventListener("click", () => {
        friendsWindow.classList.add("hideMe");
        closeBtnFriends.classList.add("hideMe");

        friendsWrapper.classList.add("close-tab");

        setTimeout(() => {
            friendsWrapper.classList.add("hideMe");
        }, 1000)
    });
};



friendUI = new FriendUI(friendsWindow);
user.getFriends(data => friendUI.render(data));


export { closeFriends }