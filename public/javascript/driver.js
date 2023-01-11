function CreateDriver() {
    document.location.replace('/signup');
}

async function UpdateDriver(id) {
    const response = await fetch(`/api/drivers/${id}`, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }
      });
}

function DeleteDriver(id) {
    document.location.replace('/signup');
}
