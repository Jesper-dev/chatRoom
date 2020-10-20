const addFriendsWrapper = document.querySelector(".add-friends-wrapper");
const closeBtnAddFriends = document.querySelector(".close-btn-addFriends");
const addFriendsWindow = document.querySelector(".add-friends-window");
const formAddFriends = document.querySelector(".addFriends-form");

const addedFriendPopup = document.querySelector(".added-friend-popup");
const addFriendName = document.querySelector("#name");

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

function addedFriendPopupFunc() {
    formAddFriends.addEventListener("submit", e => {
        e.preventDefault();

        if (addFriendName.value === "") {
            let html = `
                <span class="error">Name is empty</span>
            `;

            addedFriendPopup.innerHTML += html;

            setTimeout(() => {
                addedFriendPopup.innerHTML = "";
            }, 3000)
        } else {

            let friendName = addFriendName.value;
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


export { closeAddFriends, addedFriendPopupFunc }