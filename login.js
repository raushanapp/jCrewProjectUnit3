

let signBtn = document.getElementById('sign101')


let dataArr = JSON.parse(localStorage.getItem('Register')) ||[]



let logIn = (e) =>{
    e.preventDefault()
    console.log('login')
    let email = document.getElementById('email').value
    let password= document.getElementById('password').value


    for (let i =0; i<dataArr.length;i++) {

        if (email==dataArr[i].email && password==dataArr[i].password) {

            alert('Login Successfully')

            window.location.href = 'index.html'
            // signBtn.innerText = 'Account In'
        }
        else{
            alert('please check email and Password')
        }
    }
}