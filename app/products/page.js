"use client"

import { useState } from "react";

export default function Products() {

  const [search, setSearch] = useState("");

  const [product, setproduct] = useState([
    {
        imgurl: "/series9.jpg",
        Name: "Name : Apple Watch Series 9",
        price: "price : $399",
        categorie:"categorie : Smart Watches"
    },
    {
        imgurl: "/rendering-smart.jpg",
        Name: "Name : Samsung Galaxy Watch 6",
        price: "price : $349",
        categorie:"categorie : Smart Watches"
    },
    {
        imgurl: "/headphones.jpg",
        Name: "Name : Sony WH-1000XM5 Headphones",
        price: "price : $499",
        categorie:"categorie : Headphones"
    },
    {
        imgurl: "/wireless-computer-.jpg",
        Name: "Name : Logitech MX Master 3S Mouse",
        price: "price : $119",
        categorie:"categorie : Accessories"
    },
    {
        imgurl: "/labtop.jpg",
        Name: "Name : HP Pavilion Laptop 15",
        price: "price : $699",
        categorie:"categorie : Laptops"
    },
    {
        imgurl: "/case.jpg",
        Name: "Name : iPhone 15 Pro Case",
        price: "price : $49",
        categorie:"categorie : Phone Cases"
    },
    {
        imgurl: "/smartwatch.jpg",
        Name: "Name : smart watch",
        price: "price : 200$",
        categorie:"categorie : accesories"
    },
    {
        imgurl: "/keyboard.jpg",
        Name: "Name : Razer BlackWidow V4 Keyboard",
        price: "price : $179",
        categorie:"categorie : Keyboards"
    },
    {
        imgurl: "/tv.png",
        Name: "Name : Acer Nitro VG240 Monitor",
        price: "price : $189",
        categorie:"categorie : Monitors"
    },
  ]);

  const filteredProducts = product.filter((item) =>
    item.Name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="all-products">
      <div className="header-product">
        <h2>Products</h2>
        <input 
            className="search-product"
          type="text" 
          placeholder="Search..." 
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>

      <div className="products">
        {filteredProducts.map((item, index) => (
          <div className="product" key={index}>
            <div className="img-box">
              <img src={item.imgurl} alt={item.Name} />
            </div>
            <div className="info-product">
              <p>{item.Name}</p>
              <p>{item.price}</p>
              <p>{item.categorie}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
