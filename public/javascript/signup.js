async function signupFormHandler(e) {
    e.preventDefault();

    // getting data from the form
    const name = e.target.name.value
    const birthday = e.target.birthday.value
    const license = e.target.license.value
    const city = e.target.license.value
    const expiration = e.target.expiration.value
    const username = e.target.username.value
    const password = e.target.password.value
    const phone = e.target.phone.value
    /* Check all elements containes something or not null, NaN, etc.. */
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
    // check the response status
    if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);