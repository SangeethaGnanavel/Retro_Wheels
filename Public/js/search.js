async function filterSelection(event) {
    event.preventDefault();
  
    // Extract values from the form inputs

    const brand_id = document.querySelector('#brand-search').value;
    const type_id = document.querySelector('#type-search').value;
  
    try {
      // Make the 'PUT' request using fetch and async/await
      const response = await fetch(`/api/search`, {
        method: 'PUT',
        body: JSON.stringify({
          brand_id,
          type_id,
          
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // Check if the response is ok
      if (response.ok) {
        // Redirect to the updated car page if successful
        document.location.replace(`/all`);
      } else {
        // Display an alert if the update fails
        // alert('Failed to update car');
      }
    } catch (error) {
      // Handle any errors that occur during the fetch
      console.error('Error during fetch:', error);
      alert('An unexpected error occurred');
    }
  }
  
  // Add an event listener to the form using the new function
  document.querySelector('#submit-button').addEventListener('submit', filterSelection);
