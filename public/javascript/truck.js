function CreateNewTruck() {
    document.location.replace('/api/trucks/create-truck');
}

async function UpdateTruck(id) {
    document.location.replace(`/api/trucks/${id}`);
}

async function DeleteTruck(id) {
    const response = await fetch(`/api/trucks/delete/${id}`, {
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
