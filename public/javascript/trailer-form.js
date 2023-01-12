async function trailerFormHandler(e) {
    e.preventDefault()
    const id = e.target.id ? e.target.id.value : null
    const make   = e.target.make.value
    const year = e.target.year.value
    const vin = e.target.vin.value
    const plate = e.target.plate.value
    const number = e.target.number.value
    if(make && year && vin && plate && number){
        const response = await fetch('/api/trailers', { 
            method:'post',
            body: JSON.stringify({
                id,
                make,
                year, 
                vin,
                plate,
                number
            }),
            headers: {'Content-Type': 'application/json'}
        });
        if(response.ok){
            document.location.replace('/');
        }else{
            alert(response.statusText);
        }
    }
 } 
 document.querySelector('.trailer-form').addEventListener('submit', trailerFormHandler);