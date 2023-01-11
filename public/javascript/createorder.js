async function signupFormHandler(e) {
    e.preventDefault();

    const driver_id = e.target.driver.value
    const truck_id = e.target.truck.value
    const trailer_id = e.target.trailer.value
        
    if (driver_id && truck_id && trailer_id) {
        const response = await fetch('/api/orders', {
          method: 'post',
          body: JSON.stringify({
            driver_id: driver_id,
            truck_id: truck_id,
            trailer_id: trailer_id
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

document.querySelector('.order-form').addEventListener('submit', signupFormHandler);