// sign up 

// name || email || password -----> all inputs are required
// email -----> email already exists 
// add user

let signUpNameInput = document.getElementById('signUpNameInput')
let signupEmailInput = document.getElementById('signupEmailInput')
let signupPasswordInput = document.getElementById('signupPasswordInput')
let signupButton = document.getElementById('signupButton')
let signUpMessage = document.getElementById('signUpMessage')


let allUsers = []
if(localStorage.getItem('users')!=null)
{
    allUsers = JSON.parse(localStorage.getItem('users'))
}

// signUP
function signUp(){
    let user={
        name:signUpNameInput.value,
        email:signupEmailInput.value,
        password: signupPasswordInput.value
    }
    // inputs are empty?
    if(signUpNameInput.value=="" || signupEmailInput.value=="" || signupPasswordInput.value=='')
    {
        signUpMessage.innerHTML = 'all inputs are required'
    }
    // old email
    else if (oldEmail()==true)
    {
        signUpMessage.innerHTML = 'email already exists'
    }
    else
    {
        allUsers.push(user)
        localStorage.setItem('users',JSON.stringify(allUsers))
        signUpMessage.innerHTML = 'success'
    }
}

// [{email:'a'},{email:'b'},{email:'c'}}]
// input ==> 'b'

function oldEmail(){
    for(let i =0 ; i<allUsers.length;i++)
    {
        if(signupEmailInput.value == allUsers[i].email)
        {
            return true;
        }

    }

    return false;
    
}

if(signupButton!= null)
{
    signupButton.addEventListener('click',signUp)
}


// Login

// email , password ====>

let loginEmailInput = document.getElementById('loginEmailInput')
let loginPasswordInput = document.getElementById('loginPasswordInput')
let loginMessage = document.getElementById('loginMessage')
let loginButton = document.getElementById('loginButton')

function login(){
    // input empty
    if(loginEmailInput.value=='' || loginPasswordInput.value=='')
    {
        loginMessage.innerHTML = 'all inputs are required'
    }
    // email or password wrong 
    else if (isOldUser() == false)
    {
        loginMessage.innerHTML = 'incorrect email or password'
    }
    else
    {
        loginButton.href = 'home.html'
    }

    // emai && pass correct
}


function isOldUser(){
    for(let i =0 ; i< allUsers.length;i++)
    {
        if(loginEmailInput.value == allUsers[i].email && loginPasswordInput.value== allUsers[i].password)
        {   
            localStorage.setItem('currentUser',JSON.stringify(allUsers[i].name))
            return true;
        }
    }
    return false
}


if(loginButton != null)
{
    loginButton.addEventListener('click' , login)
}


// home page
let homeParagraph = document.getElementById('homeParagraph')

if(homeParagraph != null)
{
    var username = JSON.parse(localStorage.getItem('currentUser'))
    homeParagraph.innerHTML = `Welcome ${username}`
}

