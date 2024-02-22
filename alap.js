var tomb=[
    {
        "EtelNeve":"Babgulyás",
        "kepneve":"1.jpg",
        "ElkeszitedIdo":120,
        "KaloriaTartalma":110
    },
    {
        "EtelNeve":"Slambuc",
        "kepneve":"2.jpg",
        "ElkeszitedIdo":100,
        "KaloriaTartalma":150
    },
    {
        "EtelNeve":"Steak",
        "kepneve":"3.jpg",
        "ElkeszitedIdo":60,
        "KaloriaTartalma":100
    },
    {
        "EtelNeve":"Milánói makaróni",
        "kepneve":"4.jpg",
        "ElkeszitedIdo":80,
        "KaloriaTartalma":70
    },
    {
        "EtelNeve":"Cordon Bleu",
        "kepneve":"5.jpg",
        "ElkeszitedIdo":130,
        "KaloriaTartalma":115
    },
    {
        "EtelNeve":"Csirke rizs",
        "kepneve":"6.jpg",
        "ElkeszitedIdo":100,
        "KaloriaTartalma":60
    }
]

var sorsolas=()=>{
    var veletlenszam=Math.floor(Math.random()*tomb.length)
    console.log(veletlenszam)
    document.getElementById("etelhelye").innerHTML=`
    <span style="color:blue">
        Étel neve:
        ${tomb[veletlenszam].EtelNeve}
    </span>
    <br>
    `
    document.getElementById("etelhelye").innerHTML+=`
    <img id="kep" src="kepek/${tomb[veletlenszam].kepneve}" alt="">
    <br>
    `
    document.getElementById("etelhelye").innerHTML+=`
    <span id="zold">
        Elkészítési idő:
        ${tomb[veletlenszam].ElkeszitedIdo} perc
    </span>
    <br>
    `
    document.getElementById("etelhelye").innerHTML+=`
    <span class="rozsaszin">
        Kalória 100g-ban:
        ${tomb[veletlenszam].KaloriaTartalma} kcal
    </span>
    <br>
    `
    document.getElementById("zold").style.backgroundColor="red"
    document.getElementById("zold").style.fontWeight="bold"
    document.getElementById("zold").style.fontFamily="fantasy"
    document.getElementById("kep").style.width="400px"
}

console.log(tomb)
var sz=""
tomb.forEach(elem => {
    sz+=`<div class="col-ms-3">
        <p>
        ${elem.EtelNeve}
        </p>
        <p>
        <img class="img-fluid" src="kepek/${elem.kepneve}">
        </p>
        <p>
        ${elem.ElkeszitedIdo}
        </p>
        <p>
        ${elem.KaloriaTartalma}
        </p>
    </div>`
});
document.getElementById("kajak").innerHTML=sz