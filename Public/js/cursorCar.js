//  car javascript
document.addEventListener("DOMContentLoaded", function () {
  const car = document.createElement("div");
  car.innerHTML = "🚗";
  car.classList.add("car");

  document.body.appendChild(car);

  document.addEventListener("mousemove", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    car.style.left = x + "px";
    car.style.top = y + "px";
  });
});
