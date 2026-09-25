function login(e){
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const usersList = JSON.parse(localStorage.getItem('allUsers')) || [];

    const user = usersList.find(user => user.email === email);

    if(!user){
        alert('wrong email');
        return;
    }
    if(user.password !== password){
        alert('wrong password');
        return;
    }

    alert('login successfull');
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    
    window.location.href = 'dashboard.html'
    e.target.reset();


}