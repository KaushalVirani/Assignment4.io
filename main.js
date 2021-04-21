//Getting jason file.
window.addEventListener("load", function(){

    function getJsonData(){
       const JsonFileURL = "https://kaushalvirani.github.io/Js_Wierddeals.io/wierddeals.json";
       
       fetch(JsonFileURL)
        .then(resonse => resonse.json())
        .then(data => { addData(data); });
    }

    //Creating function to add data in the webpage.
    function addData(data){
    
        let productsContainer = document.getElementById("products");
        
        //printing data on console.
        console.log(data);

        for(let i=0; i< data.length; i++){
            let cardDiv = document.createElement("div");
                cardDiv.classList.add("card");
                cardDiv.setAttribute("style", "width: 18rem;");
            
                console.log(cardDiv);

            let productImg = document.createElement("img");
                productImg.classList.add("card-img-top");
                productImg.setAttribute("src", data[i].productImage);

            let productCardBody = document.createElement("div");
                productCardBody.classList.add("card-body");

            let productCardTitle = document.createElement("h5");
                productCardTitle.classList.add("card-title");    
                productCardTitle.appendChild(document.createTextNode(data[i].productTitle));

            let productDesc = document.createElement("p");
                productDesc.classList.add("card-text");
                productDesc.appendChild(document.createTextNode(data[i].productDescription));
  
            let productPurchase = document.createElement("a");
                productPurchase.classList.add("btn");
                productPurchase.classList.add("btn-primary");
                productPurchase.appendChild(document.createTextNode("$"+data[i].productPrice));

            productCardBody.appendChild(productCardTitle);
            productCardBody.appendChild(productImg);
            productCardBody.appendChild(productDesc);
            productCardBody.appendChild(productPurchase);

            cardDiv.appendChild(productCardBody);

            
            productsContainer.appendChild(cardDiv);
            console.log(cardDiv);
        }

    }

    getJsonData();
})
function initMap() {
  const myLatLng = {lat: 45.41117, lng: -75.69812};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,

    center: { lat: 21.19594, lng: 72.83023 }
  });

  new google.maps.Marker({
    position: myLatLng,
    map,

    title: "Barrie ON",
  });

  function addMarker(cordinates){
    var mark = new google.maps.Marker(
    {
      position: cordinates,
      map: map,
    });
  }

  addMarker({lat: 44.40011, lng: -79.66634});
  addMarker({ lat: 40.71427, lng: -74.00597 });
  addMarker({ lat: 28.644800, lng: 77.216721 });
  addMarker({ lat: 40.4165, lng: -3.70256 });
  addMarker({ lat: 51.509865, lng: -0.118092 });
}