let dataArr = JSON.parse(localStorage.getItem("products"))
function append(data) {
    data.map(function (element) {
        let div = document.createElement("div");

        let type1 = document.createElement("h4");
        type1.innerHTML = element.type;
           

        let description1 = document.createElement("h4");
        description1.innerHTML = element.desc;

        let price1 = document.createElement("p");
        price1.innerHTML = element.price;


        let image1 = document.createElement("img");
        image1.src = element.image;

        let remove = document.createElement("button")
        remove.innerText = "Remove";
        remove.id = "remove_product";
        remove.addEventListener("click", function () {
        removeproduct(element.image);
        })
        div.append(type1, description1, price1, image1,remove);

        document.querySelector("#all_products").append(div);

    })

}


function removeproduct(image) {
    let display = JSON.parse(localStorage.getItem("products"));

    let r1 = display.filter(function (element) {
        return element.image != image;
    })
    window.location.reload();
    append(r1);
    localStorage.setItem("products", JSON.stringify(r1));
    
}
append(dataArr);
console.log(dataArr);
