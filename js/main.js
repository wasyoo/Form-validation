let form = document.querySelector("#form")


function isPasswordValid(str) {
    console.log(str)
    if (str.length < 8)
        return false

    let hasCapital, hasNumber, hasLower = false;

    for (let char of str) {

        if (char == char.toUpperCase())
            hasCapital = true

        if (char == char.toLowerCase())
            hasLower = true

        if (char > '0' && char < '9')
            hasNumber = true
    }

    if (hasCapital && hasLower && hasNumber) {
        return true
    }

    return false
}

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let name = form.querySelector("#name")
    let address = form.querySelector("#address")
    let email = form.querySelector("#email")
    let password = form.querySelector("#password")
    let comments = form.querySelector("#comments")

    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g

    if (comments.value.trim() == "") {
        comments.nextElementSibling.innerHTML = "Please provide your comments!"
        comments.focus()
        comments.style.border = "2px solid red"
    } else {
        comments.nextElementSibling.innerHTML = ""
        comments.style.border = "2px solid green"
    }

    if (password.value.trim() == "") {
        password.nextElementSibling.innerHTML = "Please provide a valid Password!"
        password.focus()
        password.style.border = "2px solid red"
    } else {
        if (!isPasswordValid(password.value)) {
            password.nextElementSibling.innerHTML = "The password must be a combination of charatacters , numbers and at least a capital letter!"
            password.focus()
            password.style.border = "2px solid red"
        } else {
            password.nextElementSibling.innerHTML = ""
            password.style.border = "2px solid green"
        }
    }

    if (email.value.trim() == "") {
        email.nextElementSibling.innerHTML = "Please provide a valid email!"
        email.focus()
        email.style.border = "2px solid red"
    } else {
        if (!email.value.match(regexEmail)) {
            email.nextElementSibling.innerHTML = "email invalid!"
            email.focus()
            email.style.border = "2px solid red"
        } else {
            email.nextElementSibling.innerHTML = ""
            email.style.border = "2px solid green"
        }
    }


    if (address.value.trim() == "") {
        address.nextElementSibling.innerHTML = "Please provide your address!"
        address.focus()
        address.style.border = "2px solid red"
    } else {
        address.nextElementSibling.innerHTML = ""
        address.style.border = "2px solid green"
    }


    if (name.value.trim() == "") {
        name.nextElementSibling.innerHTML = "Please provide your name!"
        name.focus()
        name.style.border = "2px solid red"
    } else {
        name.nextElementSibling.innerHTML = ""
        name.style.border = "2px solid green"
    }


})
