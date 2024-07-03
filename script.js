document.addEventListener('DOMContentLoaded', function() {
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
  console.log(data[0])
  for (let i = 0; i < data.length; i++) {
    const container = document.createElement("div");
    body.appendChild(container);
    const info = document.createElement('div');
    info.classList.add("info");
    container.appendChild(info);
    const image = document.createElement("img");
    image.classList.add("img");
    container.appendChild(image);
    const description = document.createElement("p");
    description.innerHTML=data[i].description
    description.classList.add("description");
    const heading = document.createElement("h1");
    info.appendChild(heading);
    heading.classList.add("heading");
    const price = document.createElement("h2");
    price.classList.add("price");
    info.appendChild(price);
    container.classList.add("container");
    image.src = data[i].image;
    heading.innerHTML = data[i].title;
    price.innerHTML = "$" + data[i].price;
    
    container.addEventListener("click", () => {
      // container.forEach(
      //   (c) => c.classList.remove("active")
      // );
      container.classList.toggle("active");
      container.classList.toggle("container");  
      
      info.insertBefore(description,price);
      if(container.classList.contains("container")){
        info.removeChild(description)
    }

    // container.classList.contains("active") ? console.log(data[i].title) : console.log("not active");
    // });
});
}};
getProducts();
});