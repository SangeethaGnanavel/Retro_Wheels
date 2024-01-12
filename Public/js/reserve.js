async function reserveCar(event) {
    event.preventDefault();
  
    // Extract values from the form inputs
  
    const user_id = document.querySelector('#car_user').value;
    
  
    // Extract the car ID from the URL
    const car_id = window.location.toString().split('/').pop();
  
    try {
      // Make the 'PUT' request using fetch and async/await
      const response = await fetch(`/api/car/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          car_id,
          user_id,
          
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // Check if the response is ok
      if (response.ok) {
        // Redirect to the updated car page if successful
        document.location.replace(`/car/${id}`);
      } else {
        // Display an alert if the update fails
        alert('Failed to update car');
      }
    } catch (error) {
      // Handle any errors that occur during the fetch
      console.error('Error during fetch:', error);
      alert('An unexpected error occurred');
    }
  }
  
  // Add an event listener to the form using the new function
  document.querySelector('.update-car-form').addEventListener('submit', reserveCar);








// function reserveCar(carId) {
  
//     const reservationData = {
//       carId: carId,
     
//     };
    
//     fetch('/reserveCar', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(reservationData),
//     })
//       .then(response => response.json())
//       .then(data => {
       
//         alert(data.message); 
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }