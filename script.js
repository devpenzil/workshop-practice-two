//elements
let chipCont = document.querySelector('.chip-container');
let input = document.querySelector('.input');

let num = 1

//add chip
const addChip = () => {
    let txt = input.value
    num = num > 7 ? 1 : num
    let txt_status = txt.replace(/\s/g, "")
    if (txt_status != "") {
        chipCont.innerHTML += `<div class="chip between col-${num}">${txt} <i class="ri-close-line" onclick="deleteChip(event)"></i></div>`
    }
    input.value = null
    input.focus()
    num++
}

//delete chip
const deleteChip = (e) => {
    if (e === "delete") {
        chipCont.lastElementChild.remove()
    } else {
        e.target.parentNode.remove()
    }
}

// space key event listener
input.addEventListener('keyup', (e) => {
    if (e.code === "Space" || e.code === "Enter") {
        addChip()
    }
})

// backspace key event listener
input.addEventListener('keydown', (e) => {
    if (e.code === "Backspace" && input.value.length === 0) {
        deleteChip("delete")
    }
})