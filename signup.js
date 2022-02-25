

//  https://masai-api-mocker.herokuapp.com
/*
let signUp = async (e) =>{
     console.log('hey')
   e.preventDefault()
    try{
        let registerData = {
            email:document.getElementById('email').value,
            password:document.getElementById('password').value,
        };
        registerData = JSON.stringify(registerData)

        let res = await fetch('https://masai-api-mocker.herokuapp.com/auth/register',{
            method:'POST',
            body:registerData,
            headers:{
                'Content-Type':'application/json'
            },
        });

        let data = await res.json()
        console.log('data:',data)
      
    }
    catch (e) {
        console.log('error from signup function:',e)
    }
}
*/

let arr =  JSON.parse(localStorage.getItem('Register'))||[];

let signUp = (event) =>{
    event.preventDefault()
    // console.log('hey')
    let registerData = {
        email:document.getElementById('email').value,
       password:document.getElementById('password').value         
    };
    arr.push(registerData)
    // console.log(arr)
    localStorage.setItem('Register',JSON.stringify(arr))
    alert('Registation Successfully Please Click Sign In')
    // console.log(registerData)
}