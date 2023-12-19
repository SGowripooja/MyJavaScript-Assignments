let celcius = 0;

async function getWeather(e){
    let {lat,lng}=e.currentTarget

    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9d524ec8aec6aec49ead1a3b715ff4ab`)
    let data1 = await res.json()
    celcius = data1.main.temp - 273.15

  window.alert(`The temperature of  is ${data1.main.temp} and Celicus is ${celcius.toFixed(2)}`)
    
}


function createCards(data){
    data.forEach(e=> {
        console.log(e)

        let div = document.getElementById('title')
        let card = document.createElement('div')
        let [lat,lng] = e.latlng
        card.lat = lat
        card.lng = lng
        card.addEventListener('click',getWeather,false)
        card.innerHTML=`<div class='card-wrapper card'>
                            <h5> <mark>Country</mark> :${e.name.common}
                            <mark>Capital</mark> : ${e.capital}
                            <mark>Region</mark> :${e.region}
                            <mark>Country Code</mark> :${e.cca3} </h5>
                            <br>
                            <img src="${e.flags.png}" style="width="50" height="60"" />
                            <button id="button-pressed">Click for Weather</button>
                        </div>`
        div.appendChild(card)   
    });
}

async function loadData(){
    try{
        let res = await fetch('https://restcountries.com/v3.1/all', {method:'GET'})
        let data = await res.json()
        createCards(data)
    }
    catch{
     console.error(error)
    }
}

loadData();


