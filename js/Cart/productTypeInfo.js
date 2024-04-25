const productTypes = JSON.parse(localStorage.getItem("ItenLocal"));
//console.log(productTypes)

const contentTypesProducts = document.querySelector(".product__list-type");
const typeProductsCategory = document.querySelector(".product__menu");
const productInfo = document.querySelector(".modal-content");
let productModalbtn = document.querySelectorAll(".quick-view_modal");
let productbtnDetails = document.querySelectorAll(".product-selected_details");
let productModalbtnClose = document.querySelector("#closeBtn");
const body = document.querySelector("body")
const modal = document.querySelector("#productModal")





function changeFilter() {
    const btnFilter = productTypes.find(productType => productType.id)

    let button = document.createElement("button");
    button.dataset.filter = `${btnFilter.categoria.id}`
    button.innerText = `${btnFilter.categoria.nombre}`;
    typeProductsCategory.append(button)
}
changeFilter()

function loadTypesProducts() {

    productTypes.forEach(productType => {
        let div = document.createElement("div");
        div.classList.add("col-md-4", "single__pro", "col-lg-3", "col-sm-12", `${productType.id}`)
        div.innerHTML =

            `
            <div class="product foo">
                <div class="product__inner">
                    <div class="pro__thumb">
                        <a href="#">
                            <img src="${productType.imagen}" alt="${productType.titulo}">
                        </a>
                    </div>
                    <div class="product__hover__info">
                        <ul class="product__action">
                            <!--<li class="quick-view_modal" id="${productType.numero}">
                                <a title="Quick View" class="quick-view modal-view detail-link">
                                        <span class="ti-plus">
                                        </span>
                                </a>
                            </li>-->
                            <li class="product-selected_details" id="${productType.numero}">
                                <a title="Product Details" class="quick-view modal-view detail-link">
                                    <span class="ti-shopping-cart">
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="add__to__wishlist">
                        <a data-bs-toggle="tooltip" title="Add To Wishlist" class="add-to-cart"
                            href="wishlist.html"><span class="ti-heart"></span></a>
                    </div>
                </div>
                <div class="product__details">
                    <h2><a >${productType.titulo}</a></h2>
                    <ul class="product__price">
                        <li class="new__price">$${productType.precio}</li>
                    </ul>
                </div>
            </div>
        `;
        contentTypesProducts.append(div);
    })

    //actualizarBtns()
    btnsDetails()
    
}

loadTypesProducts();

// function actualizarBtns() {
//     productModalbtn = document.querySelectorAll(".quick-view_modal");
    
    
//     productModalbtn.forEach(button =>{
//         button.addEventListener("click", callModal);
//     });
// }

// let productSelectedModals=[]

// function callModal(e){
//     const numberProduct = e.currentTarget.id;
//     //console.log(numberProduct)

//     const productTypes = products.find(product => product.numero === numberProduct);


//     productSelectedModals.push(productTypes)
//     console.log(productSelectedModals)
    


//     if (productSelectedModals.some(product => product.numero === numberProduct) === true) {

//             productSelectedModals.forEach(productSelectedModal => {
//             let div = document.createElement("div");
//             div.classList.add("modal-body")
//             div.setAttribute("id", `${productSelectedModal.id}`)
//             div.innerHTML =
//                 `
//                 <div class="modal-product">
//                 <!-- Start product images -->
//                 <div class="product-images">
//                     <div class="main-image images">
//                         <img alt="big images" src="images/product/big-img/1.jpg">
//                     </div>
//                 </div>
//                 <!-- end product images -->
//                 <div class="product-info">
//                                     <h1>${productSelectedModal.titulo}</h1>
//                                     <div class="rating__and__review">
//                                     </div>
//                                     <div class="price-box-3">
//                                         <div class="s-price-box">
//                                             <span class="new-price">Book for $${productSelectedModal.precio}</span>
//                                             <span class="new-price">${productSelectedModal.infoAdicional2}</span>
//                                         </div>
//                                     </div>
//                                     <div class="quick-desc">
//                                         ${productSelectedModal.information}
//                                     </div>
//                                     <div class="select__color">
//                                         <h2>Color</h2>
//                                         <ul class="color__list">
//                                             <li class="${productSelectedModal.categoria.color}"><a title="${productSelectedModal.categoria.color}">${productSelectedModal.categoria.color}</a></li>
//                                         </ul>
//                                     </div>
//                                     <div class="select__size">
//                                         <h2>Size</h2>
//                                         <ul class="size__list">
//                                             <li class="l__size" style="font-size: 18px"><a>&nbsp;${productSelectedModal.medidas}</a></li>
//                                             <li class="l__size"><a>&nbsp;${productSelectedModal.infoAdicional1}</a></li>
//                                         </ul>
//                                     </div>
//                                     <div class="social-sharing">
//                                         <div class="widget widget_socialsharing_widget">
//                                             <h3 class="widget-title-modal">Follow us in</h3>
//                                             <ul class="social-icons">
//                                             <li><a href="" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
//                                             <li><a href="" target="_blank"><i class="fa-brands fa-pinterest-p"></i></a></li>
//                                             </ul>
//                                         </div>
//                         </div>
//                     <!--<div class="addtocart-btn">
//                         <a id=${productSelectedModal.numero} class="product_details">Product Details</a>
//                     </div>-->
//                 </div>
    
//             `;
//             productInfo.append(div);

//         })
        
//         body.classList. toggle("open-modal")
//         modal.classList.toggle("show")


//     }

//     productModalbtnClose.addEventListener("click", () =>{
//         body.classList.remove("open-modal");
//         modal.classList.remove("show");
//         //productSelectedModals.innerHTML = "";
//         productSelectedModals.shift();
//     })
//     console.log(productModalbtnClose)
    
// }

// callModal()

function btnsDetails() {
    productbtnDetails = document.querySelectorAll(".product-selected_details");
    //console.log(productbtnDetails)
    
    productbtnDetails.forEach(button =>{
        button.addEventListener("click", callDetails);
    });
}


function callDetails(e) {
    const numberProductReference = e.currentTarget.id;

    let productDetails = products.filter(product => product.numero === numberProductReference);

    window.location.href = 'product-details.html'

    localStorage.setItem("ItenDetails", JSON.stringify(productDetails))

}

callDetails()
