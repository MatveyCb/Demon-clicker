let input = document.querySelectorAll("form input")
let form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()


    if (input[0].value.length > 0 &&input[1].value.length > 0 && input[2].value.length > 0) {
        saveUserInfo({
            name: input[0].value,
            login: input[1].value,
            password: input[2].value
        })
        location.pathname = "./src/pages/bosses.html"
    } else{
        alert("You have to write something!!!")
    }
})

function saveUserInfo(data) {
    localStorage.setItem("user-info-clicker-game", JSON.stringify(data))
}