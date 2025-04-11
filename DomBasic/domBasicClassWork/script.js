const signupForms = document.forms.signup;
const loginForms = document.forms.login

const users = []


signupForms.addEventListener('submit', (ev) => {
    ev.preventDefault()

    const user = {}
    const fn = new FormData(signupForms)

    fn.forEach((value, key) => {
        user[key] = value
    })

    users.push(user)
    console.log(users);
    

})

loginForms.addEventListener('submit', (event) => {
    event.preventDefault()

    const fn = new FormData(loginForms)
    const loginData = {}

    fn.forEach((value, key) => {
        loginData[key] = value
    })

    const userFind = users.find(user => 
        user.login === loginData.login && user.password === loginData.password
    )

    if (userFind) {
        alert('Hello')
    } else {
        alert('Bye')
    }
})