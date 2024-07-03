const body = document.querySelector("body");
const nav = document.createElement("nav");
const logo = document.createElement("img");
const features = document.createElement("div");
const ul = document.createElement("ul");
const li = document.createElement("li");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");
const login = document.createElement("button");
login.classList.add("login")
nav.classList.add("nav")
ul.classList.add("ul")
logo.classList.add("logo");
login.innerHTML="Login"
li.innerHTML='Home'
li1.innerHTML='Shop'
li2.innerHTML='Contact'
li3.innerHTML='Blog'
li4.innerHTML='About'
logo.src = "Peaky.png"
nav.appendChild(logo);
body.appendChild(nav);
nav.appendChild(features);
features.appendChild(ul);
ul.appendChild(li);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
nav.appendChild(login);



async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  data = await res.json();
  for (let i = 0; i < data.length; i++) {
    const container = document.createElement("div");
    body.appendChild(container);
    const image = document.createElement("img");
    image.classList.add("img");
    container.appendChild(image);
    const heading = document.createElement("h1");
    container.appendChild(heading);
    heading.classList.add("heading");
    const price = document.createElement("h2");
    price.classList.add("price");
    container.appendChild(price);
    container.classList.add("container");
    image.src = data[i].image;
    heading.innerHTML = data[i].title;
    price.innerHTML = "$" + data[i].price;
  }
}
getProducts();
