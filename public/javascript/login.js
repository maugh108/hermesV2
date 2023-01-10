async function loginFormHandler(e) {
  e.preventDefault();
    const email = e.target.username.value
    const password = e.target.password.value
    /*if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }*/
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);