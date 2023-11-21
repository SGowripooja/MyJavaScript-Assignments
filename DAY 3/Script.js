let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
var data =[];
xhr.onload=function(){
     data = JSON.parse(xhr.response);
     for (let i=0;i<data.length; i++){
        console.log(i + ") Flag is "+ data[i].flag);
        console.log("Name of the country " + data[i].name.common);
        console.log("Name of the region " + data[i].region);
        console.log("Name of the sub-region " + data[i].subregion);
        console.log("Population " + data[i].population);
    }
}
