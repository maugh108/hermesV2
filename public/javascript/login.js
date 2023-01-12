async function loginFormHandler(e) {
  e.preventDefault();
    const username = e.target.username.value
    const password = e.target.password.value
    if (username && password) {
      const response = await fetch('/api/drivers/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);