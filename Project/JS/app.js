// let nav = document.getElementById('navbar').style.display='none';

function icon() {
    let bar = document.getElementById('bar');
    let tablet = document.getElementById('tablet').style.display = 'none';
    let nav1 = document.getElementById('navbar').style.display = 'block';
    let nav = document.getElementById('navbar').style.right = '0px';
}

function closei() {
    // let naw = document.getElementById('navbar').style.right = '-260px';
    // let nav = document.getElementById('navbar').style.right = '-451px';
    let nav1 = document.getElementById('navbar').style.display = 'none';
    let tablet = document.getElementById('tablet').style.display = 'block';
}

function oneImg() {
    let oneimg = document.getElementById('mainImg').src = './IMG/products/f1.jpg';
}

function twoImg() {
    let oneimg = document.getElementById('mainImg').src = './IMG/products/f2.jpg';
}

function threeImg() {
    let oneimg = document.getElementById('mainImg').src = "./IMG/products/f3.jpg";
}

function fourImg() {
    let oneimg = document.getElementById('mainImg').src = './IMG/products/f4.jpg';
}


const products = [
    {
        id: 0,
        img: "./IMG/products/f1.jpg",
        title: Cartoon - Astronaut - T - Shirts,
        price: 78.00,
        value: 1,
        subtotal: 78.00,
    },

    {
        id: 1,
        img: "./IMG/products/f2.jpg",
        title: Cartoon - Astronaut - T - Shirts,
        price: 78.00,
        subtotal: 78.00,
    },

    {
        id: 2,
        img: "./IMG/products/f3.jpg",
        title: Cartoon - Astronaut - T - Shirts,
        price: 78.00,
        subtotal: 78.00,
    },

    {
        id: 3,
        img: "./IMG/products/f4.jpg",
        title: Cartoon - Astronaut - T - Shirts,
        price: 78.00,
        subtotal: 78.00,
    }
]

const Cart = [];

function addToCart() {
    let productEle = Document.getElementById("cart-section");

    productEle.innerHTML = '';

    products.map(function (item, i) {

        productEle.innerHTML += `
        <tr>
            <td><a href=""><i class="fa-regular fa-circle-xmark"></i></a></td>
            <td>${item.img}</td>
            <td>${item.title}</td>
            <td>${item.price}</td>
            <td><input type="number">${item.value}</td>
            <td>${item.subtotal}</td>
        </tr>
        `
    })
}

function addToCart(i){
    let Iamge = products[i].img;
    let Title = products[i].title;
    let price = products[i].price;
    let value = products[i].value;
    let subtotal = products[i].subtotal;
}

let Cartproduct = {
    proImage : img,
    proTitle : title,
    proPrice : price,
    provalue : value,
    proSubtotal : subtotal,
}

Cart.push(Cartproduct);
console.log(Cart);


















// const categories = [...new Set(product.map((item) => { return item }))]
// let i = 0;

// DocumentFragment.getElementById('cart-section').innerHTML = categories.map((item) => {
//     var { img, title, price, subtotal } = item;
//     return (
//         ` <tr>
//             <td><a href=""><i class="fa-regular fa-circle-xmark"></i></a></td>
//             <td>${item.img}</td>
//             <td>${item.title}</td>
//             <td>${item.price}</td>
//             <td><input type="number" value="1"></td>
//             <td >${item.subtotal}</td>
//         </tr>
//             "<button onclick = 'addtocart("+(i++)+")'> Add to Cart</button>"
//             `
//     )
// }
// )
