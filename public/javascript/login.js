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
function Editar(id){
  console.log(id)
}
function Borrar(id){
  console.log(`borrar ${id}`)
}
function Create(){
  document.location.replace('/crear-orden');
}
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);