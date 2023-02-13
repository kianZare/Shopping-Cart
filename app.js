const cartBtn = document.querySelector(".cart-btn");
const cartModal = document.querySelector(".cart");
const backDrop = document.querySelector(".backdrop");
const closeModal  = document.querySelector(".cart-item-confirm");

const productDOM =document.querySelector(".products-center");


import { productsData } from "./products.js";

// 1.get products
class Products{
    getProducts() {
        return productsData;
    }
}


// 2. display products
class UI {
    displayProducts(products) {
        let result = '';
        products.forEach((item) => {
            result += `
            <section class="product">
            <div class="img-container">
                <img class="product-img" src="${item.imageUrl}" alt="p -1">
            </div>
            <div class="product-desc">
                <p class="product-title">${item.title}</p>
                <p class="product-price">£ ${item.price}</p>
            </div>
            <button class="add-to-cart" data-id=${item.id}><i class="fas fa-cart-plus">&nbsp&nbsp</i>add to cart</button>
        </section>
            `;
            productDOM.innerHTML = result;
        });
            
    }
}

// 3. storage
class Storage {
    static saveProducts(products) {
        localStorage.setItem("products", JSON.stringify(products));
    }

}

document.addEventListener("DOMContentLoaded", () => {
    const products = new Products();
    const productsData = products.getProducts();
    const ui = new UI();
    ui.displayProducts(productsData);
    Storage.saveProducts(productsData);

    // console.log(productsData);
})

// cart item module
function showModalFunction () {
    backDrop.style.display = "block";
    cartModal.style.opacity = "1";
    cartModal.style.top = "20%";
};

function closeModalFunction () {
    backDrop.style.display = "non";
    cartModal.style.opacity = "0";
    cartModal.style.top = "100%";
};

cartBtn.addEventListener("click", showModalFunction);
closeModal.addEventListener("click", closeModalFunction);
backDrop.addEventListener("click", closeModalFunction)