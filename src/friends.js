const friendsWrapper = document.querySelector(".friends-wrapper");
const closeBtnFriends = document.querySelector(".close-btn-friends");
const friendsWindow = document.querySelector(".friends-window");

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

export { closeFriends }