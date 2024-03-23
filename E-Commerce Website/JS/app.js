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


let slider = document.getElementById('sidebar');
let disPlay = 0;
function showCart() {
    if (disPlay == 1) {
        slider.style.display = 'block';
        disPlay = 0;
    } else {
        slider.style.display = 'none';
        disPlay = 1;
    }
}


// Shop Product Store in Array
const products = [
    {
        id: 0,
        img: "./IMG/products/f1.jpg",
        title: "Cuban Collar Shirt With Short Sleeves",
        quantity: 1,
        price: 75.00,
    },

    {
        id: 1,
        img: "./IMG/products/f2.jpg",
        title: "Cuban Collar Shirt With Short Sleeves",
        quantity: 1,
        price: 78.00,
    },

    {
        id: 2,
        img: "./IMG/products/f3.jpg",
        title: "Cuban Collar Shirt With Short Sleeves",
        quantity: 1,
        price: 78.00,
    },

    {
        id: 3,
        img: "./IMG/products/f4.jpg",
        title: "Cuban Collar Shirt With Short Sleeves",
        quantity: 1,
        price: 60.00,
    },

    {
        id: 4,
        img: "./IMG/products/f5.jpg",
        title: "Cartoon - Astronaut - Shirts",
        quantity: 1,
        price: 65.00,
    },

    {
        id: 5,
        img: "./IMG/products/f6.jpg",
        title: "Cartoon - Astronaut - Shirts",
        quantity: 1,
        price: 78.00,
    },

    {
        id: 6,
        img: "./IMG/products/f7.jpg",
        title: "Cartoon Astronaut Trousers",
        quantity: 1,
        price: 60.00,
    },

    {
        id: 7,
        img: "./IMG/products/f8.jpg",
        title: "Cartoon - Astronaut - T - Shirts",
        quantity: 1,
        price: 40.00,
    },

    {
        id: 8,
        img: "./IMG/products/n1.jpg",
        title: "Cartoon - Astronaut - Shirts",
        quantity: 1,
        price: 55.00,
    },

    {
        id: 9,
        img: "./IMG/products/n2.jpg",
        title: "Cartoon - Astronaut - Shirts",
        quantity: 1,
        price: 60.00,
    },

    {
        id: 10,
        img: "./IMG/products/n3.jpg",
        title: "Cartoon Astronaut Shirt With Full Sleeves",
        quantity: 1,
        price: 85.00,
    },

    {
        id: 11,
        img: "./IMG/products/n4.jpg",
        title: "Cartoon - Astronaut - Shirts",
        quantity: 1,
        price: 90.00,
    },

    {
        id: 12,
        img: "./IMG/products/n5.jpg",
        title: "Cartoon Astronaut Shirt With Full Sleeves",
        quantity: 1,
        price: 55.00,
    },

    {
        id: 13,
        img: "./IMG/products/n6.jpg",
        title: "Fastdry Active Essential Shorts",
        quantity: 1,
        price: 45.00,
    },

    {
        id: 14,
        img: "./IMG/products/n7.jpg",
        title: "Cartoon - Astronaut - Shirts",
        quantity: 1,
        price: 88.00,
    },

    {
        id: 15,
        img: "./IMG/products/n8.jpg",
        title: "Cartoon - Astronaut -  Shirts",
        quantity: 1,
        price: 78.00,
    }
];

const categories = [...new Set(products.map((item) => { return item }))]
let i = 0;

document.getElementById("root").innerHTML = categories.map((item) => {
    let { img, title, price, quantity } = item;

    return (
        `<div class='f-row'>
            <div class= 'one'>
                <img class= 'images' src=${img}>
                <div class = 'description'>
                    <span>Adidas</span>
                    <h5>${title}</h5>
                    <div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <h4>$ ${price}.00</h4>
                </div>`+
        "<button class='btn10' onclick='addtocart(" + (i++) + ")'><i class='fa-solid fa-cart-shopping'></i></button>" +
        `</div>
            </div>`
    )
}).join('')

const Cart = [];

function addtocart(a) {
    Cart.push({ ...categories[a] });
    displaycart();
}




function displaycart(a) {
    let j = 0;
    let total = 0;

    document.getElementById("count").innerHTML = Cart.length;
    if (Cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your Cart Is Empty";
        document.getElementById('total').innerHTML = "$ " + 0 + " .00";
    }
    else {
        document.getElementById('cartItem').innerHTML = Cart.map((items) => {
            let { img, title, price, quantity } = items;
            total = total + price;
            document.getElementById('total').innerHTML = "$ " + total + " .00";
            return (
                `<div class= 'cart-item'>
                <div class = 'row-img'>
                    <img class = 'rowimg' src=${img}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <input class='inp' value='1'>
                    <h2 style='font-size:15px;'>$ ${price}.00</h2>` +
                "<i class = 'fa-regular fa-circle-xmark' onclick='delElement(" + (j++) + ")'></i></div>"
            )
        }).join('')
    }
}


function delElement(a) {
    Cart.splice(a, 1);
    displaycart();
}

document.getElementById("cartItem");
if (id[0] == 1) {
    alert("This Item Is Alrady In Your Cart");
}