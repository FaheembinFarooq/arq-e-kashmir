function addToCart() {
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");
  const sizeData = document.getElementById("size").value.split("|");

  const item = {
    type: type,
    weight: sizeData[0],
    price: sizeData[1]
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart");
}
