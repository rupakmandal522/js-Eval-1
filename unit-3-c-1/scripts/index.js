//store the products array in localstorage as "products"

let dataArray =JSON.parse(localStorage.getItem("products"))|| [];
function PumaProduct(t,d,p,i){
    this.type=t,
    this.desc=d,
    this.price=p,
    this.image=i
}

function getProducts(event){
    event.preventDefault();

    let form = document.getElementById("products");

    let Type = form.type.value;
    let Description = form.desc.value;
    let Price = form.price.value;
    let Image = form.image.value;

let c1= new PumaProduct(Type,Description,Price,Image)
console.log(c1);

dataArray.push(c1);
localStorage.setItem("products",JSON.stringify(dataArray));

}



