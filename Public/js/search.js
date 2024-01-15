async function filterSelection(event) {
  event.preventDefault();
  // Extract values from the form inputs
  const brand_id = document.querySelector("#brand-search").value;
  const type_id = document.querySelector("#type-search").value;
  var url = "/search?";
  let params = new URLSearchParams(url.search);
  console.log(params);
  try {
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
    console.log(params);
    // document.location.replace(url + params);
  } catch (error) {
    alert("An unexpected error occurred");
  }
}

async function clearSelection(event) {
  event.preventDefault();
  document.location.replace("/all");
}
// Add an event listener to the form using the new function
document
  .querySelector(".search-form")
  .addEventListener("submit", filterSelection);

document
  .querySelector(".clearsearch")
  .addEventListener("click", clearSelection);
