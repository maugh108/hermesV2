async function signupFormHandler(e) {
    e.preventDefault();

    const name = e.target.name.value
    const birthday = e.target.birthday.value
    const license = e.target.license.value
    const city = e.target.license.value
    const expiration = e.target.expiration.value
    const username = e.target.username.value
    const password = e.target.password.value
    const phone = e.target.phone.value
    
    if (name && username && password && birthday && license && city && expiration && phone) {
        const response = await fetch('/api/drivers', {
          method: 'post',
          body: JSON.stringify({
            name,
            username,
            password,
            birthday,
            license,
            city,
            expiration,
            phone
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

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);