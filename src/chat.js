const btns = document.querySelectorAll(".btn");

function btnsEvent() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("mouseout", e => {
            e.target.classList.add("button-out")
        })
    };
}


export { btnsEvent }
