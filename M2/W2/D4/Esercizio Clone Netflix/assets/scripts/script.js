// script per home page login
const accessLogin = {
    email: 'user@gmail.com',
    password: 'password'
}

let formLogin = document.getElementById('login')
let btnLogin = document.getElementById('btnLogin')
let user = document.getElementById('email')
let password = document.getElementById('password')
let loginPage = document.getElementById('login_page')
let homePage = document.getElementById('home-page')

login.addEventListener('submit', (event) => {
    event.preventDefault();
    const userValue = user.value.trim()
    const passwordValue = password.value.trim()

    if (userValue === accessLogin.email && passwordValue === accessLogin.password) {
        loginPage.classList.add('d-none')
        homePage.classList.replace('d-none', 'd-block')
    } else {
        alert('ATTENZIONE! Email o password errati!')
    }
})