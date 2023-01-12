function CreateNewTrailer() {
    document.location.replace('/api/trailers/create-trailer');
}

async function UpdateTrailer(id) {
    document.location.replace(`/api/trailers/${id}`);
}

async function DeleteTrailer(id) {
    const response = await fetch(`/api/trailers/delete/${id}`, {
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
