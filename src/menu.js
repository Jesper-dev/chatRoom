import "../dist/style.css";

const btns = document.querySelectorAll(".menu-btn");
const closeBtn = document.querySelector(".close-btn-menu");
const showBtn = document.querySelector(".show-btn");
const showBtni = document.querySelector(".show-menu-div > button > i");
const menu = document.querySelector(".menu");
const chatWrapper = document.querySelector(".chat-wrapper");
const chatWindow = document.querySelector(".chat-window");
const formChat = document.querySelector(".form-div-chat");
const closeBtnChat = document.querySelector(".close-btn-chat-div");

function btnsEvent() {
    menu.addEventListener("click", e => {
        if (e.target.classList.contains("chatBtn")) {
            chatWindow.classList.remove("hideMe");
            chatWrapper.classList.remove("close-chat");
            closeBtnChat.classList.remove("hideMe");
            formChat.classList.remove("hideMe");
            chatWrapper.classList.remove("hideMe");
        }
    })
};

function closeBtnEvent() {
    closeBtn.addEventListener("click", () => {
        menu.classList.add("menu-close");
        closeBtn.classList.add("hideMe");
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.add("hideMe");
        }
        setTimeout(() => {
            menu.classList.add("menu-close-height");
        }, 700)
        setTimeout(() => {
            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.remove("hideMe");
            }
            closeBtn.classList.remove("hideMe");
            menu.classList.remove("menu-close");
            menu.classList.remove("menu-close-height");
            menu.classList.add("hideMe");
            showBtn.classList.remove("hideMe");
        }, 1600)
    })
}

function showMenuEvent() {
    showBtn.addEventListener("click", () => {
        showBtn.classList.add("menu-show");
        showBtni.classList.add("hideMe");
        setTimeout(() => {
            showBtn.classList.add("menu-show-height");
        }, 500)
        setTimeout(() => {
            showBtn.classList.remove("menu-show");
            showBtn.classList.remove("menu-show-height");
            showBtn.classList.add("hideMe");
            showBtni.classList.remove("hideMe");
            menu.classList.remove("hideMe");
        }, 1600)

    });
}





export { btnsEvent, closeBtnEvent, showMenuEvent }
