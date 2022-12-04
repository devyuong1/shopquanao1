var listProduct = [
     {
        name : "Áo Khoác Hoodie Nỉ Có Mũ Form Rộng ESSENTIALS Nhiều Màu Unisex Nam Nữ Ulzzang",
        price: 115,
        img: "./images/sanpham/sp1.jpg"
    },
     {
        name : "Áo Khoác Hoodie Có Mũ Form Rộng Nam Nữ ",
        price: 205,
        img: "./images/sanpham/sp2.jpg"
    },
     {
        name : "Áo Khoác Hoodie Mèo hoàng thượng",
        price: 230,
        img: "./images/sanpham/sp3.jpg"
    },
     {
        name : "Áo hoodie unisex chuột Stitch",
        price: 230,
        img: "./images/sanpham/sp4.jpg"
    },
    {
        name : "Áo hoodie nỉ trơn nhiều màu",
        price: 300,
        img: "./images/sanpham/sp5.jpg"
    },
     {
        name : "Áo hoodie nỉ trơn nhiều màu",
        price: 300,
        img: "./images/sanpham/sp5.jpg"
    },
    {
        name : "Áo Polo Dry Vải Pique Ngắn Tay",
        price: 100,
        img: "./images/sanpham/sp6.jpg"
    },



    {
        name : "Áo Polo Cool Plus ",
        price: 120,
        img: "./images/sanpham/sp7.jpg"
    },
    {
        name : "Áo Polo Dry Vải Pique Ngắn Tay",
        price: 300,
        img: "./images/sanpham/sp6.jpg"
    },
    {
        name : "Áo Polo Dry Vải Pique Ngắn Tay",
        price: 200,
        img: "./images/sanpham/sp6.jpg"
    },
    {
        name : "Áo Polo Dry Vải Pique Ngắn Tay",
        price: 140,
        img: "./images/sanpham/sp6.jpg"
    },
    {
        name : "Áo Polo Dry Vải Pique Ngắn Tay",
        price: 160,
        img: "./images/sanpham/sp6.jpg"
    },


]



var headerSearchBars = document.querySelector(".header-search-bars")
var headerNav = document.querySelector(".header-nav")

headerSearchBars.onclick = function() {
    headerNav.style.display = "flex"
}

headerNav.addEventListener("click", function(e) {
    if (window.innerWidth < 576) {
        if (e.screenX > 220) {
            headerNav.style.display = "none"
        }
    }
    
    
})

var listItemProduct = document.querySelector('.header-nav-hoodie-list')

var iconDown = document.getElementById("icon-down")
iconDown.addEventListener("click", ()=> {
    
    listItemProduct.classList.toggle("d-none")
})

var listItemClick = document.querySelector(".list-img-icon").querySelectorAll("i")
var listImgItem = document.querySelector(".list-img-item")

listItemClick[0].onclick = function() {
    
    var index = parseInt(listImgItem.alt) - 1 ;
    if (index < 0) {
        index = listProduct.length - 2
    }
    console.log(index)
    listImgItem.alt = index
    listImgItem.src = listProduct[index].img
    listImgItem.classList.add("animation")
    setTimeout(
        function() {
            listImgItem.classList.remove("animation")
        },500
    )
}
listItemClick[1].onclick = function() {
    
    var index = parseInt(listImgItem.alt) + 1;
    if (index > listProduct.length - 2) {
        index = 0
    }
     
    listImgItem.alt = index
    listImgItem.src = listProduct[index].img
    listImgItem.classList.add("animation")
    setTimeout(
        function() {
            listImgItem.classList.remove("animation")
        },500
    )
}

setInterval(function() {
    var index = parseInt(listImgItem.alt) + 1;
    if (index > listProduct.length - 2) {
        index = 0
    }
     
    listImgItem.alt = index
    listImgItem.src = listProduct[index].img
    listImgItem.classList.add("animation")
    setTimeout(
        function() {
            listImgItem.classList.remove("animation")
        },500
    )
},5000)



var showListProduct = document.querySelector(".list-product")

listProduct.forEach(function(item) {
    var section = document.createElement("section")
    section.classList.add("list-product-item")

    var img = document.createElement("img")
    img.classList.add("list-product-item-img")
    img.setAttribute('src',`${item.img}`)
    

    var figure = document.createElement("figure")
    figure.classList.add("list-product-item-body")
    var h4 = document.createElement("h3")
    h4.classList.add("list-product-item-body-h4")
    h4.innerHTML = item.name


    var p = document.createElement("p")
    p.innerHTML = item.price + "k"
    p.classList.add("list-product-item-body-p")
    
    var btn = document.createElement("button")
    btn.classList.add("list-product-item-body-btn")
    btn.innerHTML = "Thêm vào giỏ hàng"
    figure.appendChild(h4)
    figure.appendChild(p)

    section.appendChild(img)
    section.appendChild(figure)
    section.appendChild(btn)

    showListProduct.appendChild(section)
})