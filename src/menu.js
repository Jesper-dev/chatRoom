import "../dist/style.css"

const btns = document.querySelectorAll(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const showBtn = document.querySelector(".show-btn");
const showBtni = document.querySelector(".show-menu-div > button > i");
const menu = document.querySelector(".menu");

function btnsEvent() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("mouseout", e => {
            // e.target.classList.add("button-out")
        })
    };
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
