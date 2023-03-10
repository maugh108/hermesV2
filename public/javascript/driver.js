function CreateDriver() {
    document.location.replace('/signup');
}

async function UpdateDriver(id) {
    document.location.replace(`/api/drivers/${id}`);
}

async function DeleteDriver(id) {
    const response = await fetch(`/api/drivers/delete/${id}`, {
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
