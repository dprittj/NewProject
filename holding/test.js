window.addEventListener("DOMContentLoaded", () => {
    const cart = localStorage;

    // Clearing cart for testing purposes
    cart.clear();

    class Pie {
        constructor(pieName, piePrice, quantity = 1) {
            this.name = pieName;  // Not an array
            this.price = piePrice;  // Not an array
            this.quantity = quantity;  // Not an array
        }
    }

    const orderButtons = document.querySelectorAll(".order");

    orderButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const pieName = button.getAttribute("data-name");
            const piePrice = parseFloat(button.getAttribute("data-price"));

            // Retrieve existing orders from the cart
            const existingOrders = JSON.parse(cart.getItem("order")) || [];

            // Check if the item already exists in the cart
            const existingItemIndex = existingOrders.findIndex(order => order.name === pieName);

            if (existingItemIndex !== -1) {
                // If the item already exists, update its quantity
                existingOrders[existingItemIndex].quantity++;
            } else {
                // If the item doesn't exist, add it to the cart
                existingOrders.push(new Pie(pieName, piePrice));
            }

            // Save updated orders to the cart
            cart.setItem("order", JSON.stringify(existingOrders));

            console.log("Order saved:", existingOrders);
        });
    });
});
