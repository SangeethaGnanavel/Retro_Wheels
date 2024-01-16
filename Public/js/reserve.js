async function reserveCars(event) {
  event.preventDefault();

  // Extract values from the form inputs
  var user_id;
  if (event.target.hasAttribute("data-userid")) {
    user_id = event.target.getAttribute("data-userid");
  }
  // Extract the car ID from the URL
  const car_id = window.location.toString().split("/").pop();
  const reserved = true;
  try {
    // Make the 'PUT' request using fetch and async/await
    const response = await fetch(`/api/reserve/${car_id}`, {
      method: "PUT",
      body: JSON.stringify({
        reserved,
        user_id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Check if the response is ok
    if (response.ok) {
      // Redirect to the updated car page if successful
      alert("Car is reserved for the User");
      document.location.replace(`/all`);
    } else {
      // Display an alert if the update fails
      alert("Failed to update car");
    }
  } catch (error) {
    // Handle any errors that occur during the fetch
    console.error("Error during fetch:", error);
    alert("An unexpected error occurred");
  }
}
// Add an event listener to the form using the new function
document.querySelector(".car-details").addEventListener("submit", reserveCars);
