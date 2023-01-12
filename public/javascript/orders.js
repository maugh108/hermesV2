function Editar(id){
    document.location.replace(`/api/orders/${id}`)
 }
 async function Borrar(id){
    const response = await fetch(`/api/orders/delete/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
          id: id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
 }
 function Create(){
   document.location.replace('/crear-orden');
 }