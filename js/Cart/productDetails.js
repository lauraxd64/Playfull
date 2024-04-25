const productDetails = JSON.parse(localStorage.getItem("ItenDetails"));

//console.log(productDetails)

const contentProductDetail = document.querySelector(".htc__product__details");
let imgDetailsChange = document.querySelectorAll(".pot-small-img");
let cartShopBtn = document.querySelector(".buy__now__btn");
//console.log(imgDetailsChange)

function loadProductsDetails() {

    productDetails.forEach(productDetail => {
        let div = document.createElement("div");
        div.classList.add("container", `${productDetail.id}`)
        div.innerHTML =
            `
            <div class="row">
            <div class="col-md-12 col-lg-6 col-sm-12">
                <div class="product__details__container">
                    <!-- Start Small images -->
                    <ul class="nav product__small__images" role="tablist">
                        <li role="presentation" class="pot-small-img">
                            <a class="active" href="#img-tab-1" role="tab" data-bs-toggle="tab">
                                <img src="images/product-details/small-img/1.jpg" alt="small-image">
                            </a>
                        </li>
                        <li role="presentation" class="pot-small-img">
                            <a href="#img-tab-2" role="tab" data-bs-toggle="tab">
                                <img src="images/product-details/small-img/2.jpg" alt="small-image">
                            </a>
                        </li>
                        <li role="presentation" class="pot-small-img">
                            <a href="#img-tab-3" role="tab" data-bs-toggle="tab">
                                <img src="images/product-details/small-img/3.jpg" alt="small-image">
                            </a>
                        </li>
                        <li role="presentation" class="pot-small-img">
                            <a href="#img-tab-4" role="tab" data-bs-toggle="tab">
                                <img src="images/product-details/small-img/4.jpg" alt="small-image">
                            </a>
                        </li>
                    </ul>
                    <!-- End Small images -->
                    <div class="product__big__images">
                        <div class="portfolio-full-image tab-content">
                            <div role="tabpanel" class="tab-pane active" id="img-tab-1">
                                <img src="images/product/big-img/1.jpg" alt="full-image">
                            </div>
                            <div role="tabpanel" class="tab-pane" id="img-tab-2">
                                <img src="images/product-details/big-img/1.jpg" alt="full-image">
                            </div>
                            <div role="tabpanel" class="tab-pane" id="img-tab-3">
                                <img src="images/product-details/big-img/1.jpg" alt="full-image">
                            </div>
                            <div role="tabpanel" class="tab-pane" id="img-tab-4">
                                <img src="images/product-details/big-img/1.jpg" alt="full-image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-lg-6 col-sm-12 smt-30 xmt-30">
                <div class="htc__product__details__inner">
                    <div class="pro__detl__title">
                        <h2 style="color: #ceb8d9">${productDetail.titulo}</h2>
                    </div>
                    <div class="pro__details">
                        <p>${productDetail.information}</p>
                    </div>
                    <ul class="pro__dtl__prize">
                        <li >$${productDetail.precio}</li>
                        <li style= "font-size:18px">${productDetail.infoAdicional2}</li>
                    </ul>
                    <div class="pro__dtl__color">
                        <h2 class="title__5">Colour</h2>
                        <ul class="pro__choose__color">
                            <li class="${productDetail.categoria.color}"><a href="#"><div class="color_base"><i class="zmdi zmdi-circle"></i></div></a></li>
                        </ul>
                    </div>
                    <div class="pro__dtl__size">
                        <h2 class="title__5">Size</h2>
                        <ul class="pro__choose__size">
                            <li><a href="#" style= "font-size:18px">${productDetail.medidas}</a></li>
                            <li><a href="#"style= "font-size:12px">${productDetail.infoAdicional1}</a></li>
                        </ul>
                    </div>
                    <div class="pro__dtl__size">
                    <h2 class="title__5">Capacity</h2>
                    <ul class="pro__choose__size">
                        <li><a href="#" style= "font-size:18px">${productDetail.capacidad}</a></li>
                    </ul>
                </div>
                    <ul class="pro__dtl__btn">
                        <li class="buy__now__btn" Id = ${productDetail.numero}><a>book now</a></li>
                        <li><a href="#"><span class="ti-heart"></span></a></li>
                    </ul>
                    <div class="pro__social__share">
                        <h2>Follow us in:</h2>
                        <ul class="pro__soaial__link">
                            <li><a href="" target="_blank"><i class="fa-brands fa-instagram" style= "font-size:25px"></i></a></li>
                            <li><a href="" target="_blank"><i class="fa-brands fa-pinterest-p" style= "font-size:25px"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        `;
        contentProductDetail.append(div);
    })
    //actualizarImagChange()
    cartShop()
    //console.log(imgDetailsChange)
}

loadProductsDetails()

// function actualizarImagChange() {
//     imgDetailsChange = document.querySelectorAll(".pot-small-img");
//     //console.log(imgDetailsChange)
    
//     imgDetailsChange.forEach(img =>{
//         img.addEventListener("click", callOtherImg);
//     });
// }
// function callOtherImg(e) {

//     imgDetailsChange.forEach(img => img.classList.remove("active"));

//     e.currentTarget.classList.add("active")
// }

function cartShop() {
    cartShopBtn = document.querySelector(".buy__now__btn");

    cartShopBtn.addEventListener("click", callProductCart);
}


// function callProductCart(e) {
//     const cartShopProducts = JSON.parse(localStorage.getItem("ItenCartShop")) //|| []

//     const productNumberCart = e.currentTarget.id;
//     //console.log(e.currentTarget.id)
//     // console.log(cartShopProducts)
//     // cartShopProducts.forEach(P =>{console.log(P.numero)})
    
//     const productCart = cartShopProducts.find(cartShopProduct => cartShopProduct.numero === productNumberCart);
//     // if(productCart){
//     //     alert("This product is already")
//     //     return
//     // }
//     //console.log(productCart)
//     //console.log(cartShopProducts)
//     cartShopProducts.push(productCart)

//     localStorage.setItem("ItenCartShop", JSON.stringify(cartShopProducts))
//     //console.log((cartShopProducts.some(productDetail => productDetail.numero === productNumberCart)===true))
//     window.location.href = 'cart.html'

// }
//const cartShopProducts = []

function callProductCart(e) {

    const cartShopProducts = JSON.parse(localStorage.getItem("ItenCartShop")) || []

    const productNumberCart = e.currentTarget.id;

    const productCart = productDetails.find(productDetail => productDetail.numero === productNumberCart);

    if(cartShopProducts.some(productDetail => productDetail.numero === productNumberCart)===false){

        cartShopProducts.push(productCart);
        localStorage.setItem("ItenCartShop", JSON.stringify(cartShopProducts))
        window.location.href = 'cart.html'

    } else if((cartShopProducts.some(productDetail => productDetail.numero === productNumberCart)===true)) {   

        alert("This product already exists")

    }    
            
}