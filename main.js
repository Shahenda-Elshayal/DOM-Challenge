// start header 
let header = document.createElement("div");
header.className = "header";
header.style.cssText = "display:flex;justify-content:space-between;align-items: center;padding:5px 20px 20px";

// start logo
let logo = document.createElement("div");
logo.className = "logo";
logo.style.color = "green";
logo.style.fontSize = "36px";
logo.style.fontWeight = "bold";
let logoTxt = document.createTextNode("Elzero");
logo.appendChild(logoTxt);

// start ul-list in the header
let ulList = document.createElement("ul");
ulList.style.cssText = "list-style:none;margin:0;padding:0;font-size:22px;display:flex;justify-content:space-between;align-items:center;gap:20px";
let listOne = document.createElement("li");
let listTwo = document.createElement("li");
let listThree = document.createElement("li");
let listFour = document.createElement("li");
let txtListOne = document.createTextNode("Home");
let txtListTwo = document.createTextNode("About");
let txtListThree = document.createTextNode("Service");
let txtListFour = document.createTextNode("Contact");
listOne.appendChild(txtListOne);
listTwo.appendChild(txtListTwo);
listThree.appendChild(txtListThree);
listFour.appendChild(txtListFour);
ulList.appendChild(listOne);
ulList.appendChild(listTwo);
ulList.appendChild(listThree);
ulList.appendChild(listFour);

// Append the header into the page
header.appendChild(logo);
header.appendChild(ulList);
document.body.prepend(header);

// start the content
let content = document.createElement("div");
content.className = "content";
content.style.cssText = "background:#eee;padding:20px;display:grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));gap:20px";
document.body.append(content);
header.after(content);

// start the products
for (let i = 0; i < 15; i++) {
    let product = document.createElement("div");
    product.className = "product";
    product.style.cssText = "padding:20px;text-align:center;background:white";
    let paraOne = document.createElement("p");
    paraOne.style.cssText = "font-size:28px;margin:0 0 5px";
    let paraOneTxt = document.createTextNode(`${i + 1}`);
    paraOne.appendChild(paraOneTxt);
    let spanOne = document.createElement("span");
    spanOne.style.cssText = "font-size:14px;color:grey";
    let spanOneTxt = document.createTextNode("Product");
    spanOne.appendChild(spanOneTxt);
    product.appendChild(paraOne);
    product.appendChild(spanOne);

    content.appendChild(product);
}

// start footer
let footDiv = document.createElement("div");
footDiv.className = "foot";
footDiv.style.cssText = "background:green;text-align:center;font-size:22px;color:white;padding:15px";
let footTxt = document.createTextNode("Copy right 2024");
footDiv.appendChild(footTxt);
document.body.append(footDiv);
content.after(footDiv);



