const cart = JSON.parse(localStorage.getItem("cart")) || [];
const div = document.getElementById("cart");

let total = 0;

cart.forEach(item => {
  total += parseInt(item.price);
  div.innerHTML += <p>${item.type} – ${item.weight}g – ₹${item.price}</p>;
});

div.innerHTML += <p><strong>Total: ₹${total}</strong></p>;
