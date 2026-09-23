function signup(e){
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const newUser = {name, email, password};

    const usersList = JSON.parse(localStorage.getItem('allUsers')) || [];

    const existingUser = usersList.find(user => user.email === email);
    if(existingUser){
        alert('email already exist');
        return;
    }
    if(!name || !email || !password){
        alert('field is empty');
        return;
    }

    usersList.push(newUser);

    localStorage.setItem('allUsers', JSON.stringify(usersList));

    alert('signup successfully')
    e.target.reset();
    // window.location.href = 'login.html';



}