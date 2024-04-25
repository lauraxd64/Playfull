const cartShopProducts = JSON.parse(localStorage.getItem("ItenCartShop")) || []
console.log(cartShopProducts)

let info;
const textArea = document.querySelector('#textarea').value

function allInfo() {
    info = cartShopProducts.forEach(cartShopProduct => {        
        innerinnerHTML=`The client need ${cartShopProduct.titulo}`
        document.querySelector('#textarea').value = info
    });
    // }     

}

allInfo()