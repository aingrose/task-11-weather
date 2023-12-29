
var res = fetch('https://restcountries.com/v3.1/all')
  .then(data => data.json())
  .then((data1) => {
    for (let i = 0; i < data1.length; i++) {
      var s = data1[i];

      if (i % 3 === 0) {
        var container = document.createElement("div");
        container.className = "container";
        var row = document.createElement("div");
        row.className = "row";
      }

      let cardColumn = document.createElement("div");
      cardColumn.className = "col-lg-4 col-sm-12 mb-3";

      
      let card = document.createElement("div");
      card.className = "card h-100 mb-3 ml-2 ";

    
      let cardHeader = document.createElement("div");
      cardHeader.className = "card-header bg-black text-white text-center";
      cardHeader.innerHTML = `<h4 class="card-title">${s.name.common}</h4>`;

   

let cardBody = document.createElement("div");
cardBody.className = "card-body text-center  ";


  cardBody.innerHTML = `
     <img src="${data1[i].flags.png}" class="card-img h-50" alt="...">
    <p class="card-text">Region: ${s.region}</p>
    <p class="card-text">Capital: ${s.capital}</p>
    <p class="card-text">Country Code: ${s.ccn3}</p>
    <a href="#" class="btn btn-primary" onclick="${data1[i].latlng ? `weather(${data1[i].latlng[0]}, ${data1[i].latlng[1]})` : ''}">Click for Weather</a>
  `;


      card.appendChild(cardHeader);
      card.appendChild(cardBody);

      cardColumn.appendChild(card);

      row.appendChild(cardColumn);

      if (i % 3 === 2 || i === data1.length - 1) { 
        container.appendChild(row);
        document.body.append(container);
      }
    }
  });


function weather(lat, lng) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2ec8027f9afa11371eb8cb23292005ff`)
      .then((response) => {
          return response.json();
      })
      .then((data) => {
          //console.log(`Weather for ${lat}, ${lng}`);
          // console.log(data.main.temp-273.15, data.visibility, )
          alert(`Temperature: ${(data.main.temp - 273.15).toFixed(1)}, Humidity: ${data.main.humidity}%, Visibility: ${data.visibility / 1000} Km,`);
      })
      .catch((error) => {
          console.log(error);
      });
}








