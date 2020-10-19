const chatWrapper = document.querySelector(".chat-wrapper");
const closeBtnChat = document.querySelector(".close-btn-chat");
const chatWindow = document.querySelector(".chat-window");
const formChat = document.querySelector(".form-div-chat");

function closeChat() {
    closeBtnChat.addEventListener("click", () => {
        chatWindow.classList.add("hideMe");
        formChat.classList.add("hideMe");
        closeBtnChat.classList.add("hideMe");

        chatWrapper.classList.add("close-tab");
        setTimeout(() => {
            chatWrapper.classList.add("hideMe");
        }, 1000)

    });
};

export { closeChat }