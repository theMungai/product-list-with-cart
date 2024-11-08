const addToCartButton = document.querySelectorAll(".add-to-cart-btn");
const emptyCart = document.querySelector(".empty-cart");
let buttonCounterQuantity = 0;
const cartQuantity = document.querySelector(".cart-quantity");
const cartWithItems = document.querySelector(".cart-with-items");

// accessing each "add to cart button"
addToCartButton.forEach(button => {
    button.addEventListener("click", () => {
        button.classList.add("decorate-button")
        cartWithItems.style.display = "block"
        emptyCart.style.display = "none"
        button.style.backgroundColor = "hsl(14, 86%, 42%)";
        button.style.color = "hsl(20, 50%, 98%)";
        button.style.display = "flex";
        button.style.justifyContent = "space-around";
        button.style.alignItems = "center";
        button.style.fontSize = "1.1rem";
        button.style.fontWeight = "400";
        button.style.border = "none"
        button.style.padding = "5px 10px";
        button.innerHTML = `
        <i class="fa-solid fa-circle-minus hover:bg-blue-700"></i>
        <p class = "button-counter"> ${buttonCounterQuantity} </p>
        <i class="fa-solid fa-circle-plus"></i>`


        const buttonCounter = button.querySelector(".button-counter");
        const plusButton = button.querySelector(".fa-circle-plus");
        const minusButton = button.querySelector(".fa-circle-minus");
        

        plusButton.addEventListener("click", () => {
            buttonCounterQuantity ++
        })

        cartQuantity.innerHTML = buttonCounterQuantity

    }) 
})






































