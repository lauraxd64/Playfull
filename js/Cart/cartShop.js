const cartShopProducts = JSON.parse(localStorage.getItem("ItenCartShop"))||[]

const cartShopItems = document.querySelector("tbody")
const btnContact = document.querySelector("#bookNow")
let deleteBtn = document.querySelectorAll(".product-remove")
const subTotal = document.querySelector(".amount")



    function loadProductsinCart() {

        cartShopItems.innerHTML = "";

        cartShopProducts.forEach(cartShopProduct => {
            let tr = document.createElement("tr");
            tr.classList.add("container", `${cartShopProduct.numero}`)
            tr.innerHTML =
            `
             <td class="product-thumbnail"><a href="#"><img src="${cartShopProduct.imagen}" alt="image to ${cartShopProduct.titulo}" /></a></td>
                <td class="product-name"><a>${cartShopProduct.titulo}</a></td >
                <td class="product-price"><span class="amount">$${cartShopProduct.precio}</span></td>
                <td class="product-quantity">${cartShopProduct.cantidad}</td>
                <td class="product-subtotal">$${cartShopProduct.precio}</td>
                <td class="product-remove" id="${cartShopProduct.numero}"><a>X</a></td>
            `;
        cartShopItems.append(tr);
    })

    actualizarDeleteBtns()
    priceCount()
}

loadProductsinCart()

function actualizarDeleteBtns() {
    deleteBtn = document.querySelectorAll(".product-remove")

    deleteBtn.forEach(button =>{
        button.addEventListener("click", callDelete);
    });
}

function callDelete(e) {
    let deliteId = e.currentTarget.id
    const indexProduct = cartShopProducts.findIndex(productDetail => productDetail.numero === deliteId)
    cartShopProducts.splice(indexProduct, 1)
    console.log(cartShopProducts)
    loadProductsinCart()
    localStorage.setItem("ItenCartShop", JSON.stringify(cartShopProducts));
    // location.href = location.href
}

function priceCount() {
    const calculateSubTotal = cartShopProducts.reduce((acc, product) => acc + (product.precio++), 0);
    subTotal.innerHTML = `$${calculateSubTotal}`;
}


btnContact.addEventListener("click", cleanCartshop);
function cleanCartshop() {
    
    // cartShopProducts.length = 0;
    // localStorage.setItem("ItenCartShop", JSON.stringify(cartShopProducts));
    // loadProductsinCart();
    window.location.href = 'contact.html'
    //console.log(cartShopProducts)
}