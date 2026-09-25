const userLogin = JSON.parse(localStorage.getItem('loggedInUser'));
if(userLogin){
    document.getElementById('greeting').textContent = `welcome: ${userLogin.email}`;
}



function logout(){
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html'
}