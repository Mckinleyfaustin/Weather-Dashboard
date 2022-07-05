function openPage() {
    var x = document.getElementById("search").value;

    if (x === "dog") {
        window.open("/index.html");
    }

    if (x === "cat") {
        window.open("/customizedalert.html");
    }

}

function searchHistory(){
    var recentSearch = []
    recentSearch.push($('#search').val());

    $.each(recentSearch, function(index, value){
        const p = document.createElement("p");
        p.innerHTML = value;
        document.getElementById("historyLine").appendChild(p);
    })
}

function getinfo(){
    const newName= document.getElementById("search");
    const cityName = document.getElementById("cityName");
    cityName.innerHTML ="--"+newName.value+"--";

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=1490e1cc909aa3db50d696fe809f25b9')
.then(response => response.json())
.then(data => {
    console.log(data);
    // for(i=0;i<5;i++){
    //     document.getElementById("day" +(i+1)+"date").innerHTML = +Number(new Date((data.list[i].dt)*1000));
    // }
    for(i=0;i<5;i++){
        document.getElementById("day" +(i+1)+"temp").innerHTML ="Temp:" +Number(1.8*(data.list[i].main.temp-273.15)+32).toFixed(1)+"°";
    }
    for(i=0;i<5;i++){
    document.getElementById("day" +(i+1)+"wind").innerHTML ="Wind:" +Number(data.list[i].wind.speed).toFixed(1)+"MPH";
    }
    for(i=0;i<5;i++){
        document.getElementById("day" +(i+1)+"hum").innerHTML ="Humidity:" +Number(data.list[i].main.humidity)+"%";
    }
    for(i=0;i<5;i++){
            document.getElementById("img" +(i+1)).src=" http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
    }
})

// .catch(err => alert("Oh no! Try again"))
}

// const d =new DataTransfer();
// const weekday =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// function checkDay(day){
//     if(day +d.getDay() > 6){
//         return day +day.getDay()-7
//     }
//     else{
//         return day +d.getDay();
//     }
// }

// for(i=0;i<5;i++){
//     document.getElementById("day"+(i)).innerHTML = weekday[checkDay(i)];
// }


