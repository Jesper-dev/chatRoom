const addFriendsWrapper = document.querySelector(".add-friends-wrapper");
const closeBtnAddFriends = document.querySelector(".close-btn-addFriends");
const addFriendsWindow = document.querySelector(".add-friends-window");
const formAddFriends = document.querySelector(".addFriends-form");

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


export { closeAddFriends }