
const token = localStorage.getItem("token")
console.log(location.pathname)




const elForm = document.querySelector(".form")
const elFormEmail = document.querySelector(".js-form-email")
const elFormPassword = document.querySelector(".js-form-password")
const logoutBtn = document.querySelector(".logout-btn")



if (location.pathname.includes("login")) {

    elForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = elFormEmail.value
        const password = elFormPassword.value


        const res = await fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,

            })

        })

        const data = await res.json()
        localStorage.setItem("token", data.token)


        if (res.ok) {
            location.pathname = "index.html"
        }

    })
}


if (location.pathname.includes("index.html")) {

    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("token");
        location.reload()
    })
}
if (!token && !location.pathname?.includes("login")) {
    location.pathname = "login.html"
}


console.log("eve.holt@reqres.in")
console.log("cityslicka")
