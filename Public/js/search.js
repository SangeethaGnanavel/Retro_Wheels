async function filterSelection(event) {
  event.preventDefault();
  // Extract values from the form inputs

  const brand_id = document.querySelector("#brand-search").value;
  const type_id = document.querySelector("#type-search").value;
  var url = "/api/search?";
  let params = new URLSearchParams(url.search);
  try {
    // Make the 'PUT' request using fetch and async/await
    if (!brand_id == 0 && !type_id == 0) {
      params.append("brand_id", brand_id);
      params.append("type_id", type_id);
    } else if (brand_id === 0 && !type_id == 0) {
      params.append("type_id", type_id);
    } else if (!brand_id == 0 && type_id === 0) {
      params.append("brand_id", brand_id);
    } else if (brand_id === 0 && type_id === 0) {
      alert("Select Brand or Type to search");
    }
    console.log(url + params);
    const response = await fetch(url + params, {
      method: "GET",
    });

    // // Check if the response is ok
    if (response.ok) {
      // Redirect to the updated car page if successful
      console.log("Search Successful");
      document.location.replace(`/all`);
    } else {
      // Display an alert if the update fails
      alert("Failed to update car");
    }
  } catch (error) {
    // Handle any errors that occur during the fetch
    alert("An unexpected error occurred");
  }
}

// Add an event listener to the form using the new function
document
  .querySelector(".search-form")
  .addEventListener("submit", filterSelection);
