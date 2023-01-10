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