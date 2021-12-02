const fname = document.getElementById("fname")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")

form.addEventListener("submit", (e) => {
    let messages = []
    if (fname.value === "" || fname.value == null) {
        messages.push("Name is required")
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(", ")
    }
})


let target = document.getElementById("createCard");
let target2 = document.getElementById("containerCard");
function showCard() {
    target2.style.visibility = "visible";
}

target.addEventListener("click", showCard);