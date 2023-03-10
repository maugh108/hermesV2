async function truckFormHandler(e) {
    e.preventDefault()
    const id = e.target.id ? e.target.id.value : null
    const make   = e.target.make.value
    const model = e.target.model.value
    const year = e.target.year.value
    const vin = e.target.vin.value
    const plate = e.target.plate.value
    const number = e.target.number.value
    if(make && model && year && vin && plate && number){
        const response = await fetch('/api/trucks', { 
            method:'post',
            body: JSON.stringify({
                id,
                make, 
                model,
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

document.querySelector('.truck-form').addEventListener('submit', truckFormHandler);