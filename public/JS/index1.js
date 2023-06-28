const conta = document.querySelector('.conainer');
const weather = document.querySelector('.weather');
const Text = document.querySelector('.Text');
const btn = document.getElementsByClassName('btn');
const enter = document.querySelector('.enter');
const input = document.querySelector('input');
const main = document.querySelector('.main');
const arrow = document.querySelector('.arrow');
const BG = document.querySelector('.BG');


const tem = document.querySelector(".temp")
const weat = document.querySelector(".weat")
const hum = document.querySelector(".hum")
const win = document.querySelector(".win")

let api;
apikey = '6cbc42c17260d23fb683d826f51f6944';

enter.addEventListener("click", e => {
    if (input.value != "") {
        requestApi(input.value);
        // console.log(input.value)
    } else {
        main.classList.add("error")
        main.innerText = "Please Enter the City Name";
    }
})


const requestApi = (city) => {
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
    fetchDate()
}


const fetchDate = async () => {
    main.innerText = "Getting Weather Deatils.....";
    main.classList.add("pending");
    fetch(api).then(response => response.json()).then(result => weatherDetails(result));
}

const weatherDetails = (info) => {
    main.classList.replace("pending", "error");
    if (info.cod == "404") {
        main.innerText = `${input.value} isn't a valid city name`;
    } else {
        // console.log("object2")
        const { speed } = info.wind;
        const { description, id } = info.weather[0];
        const { humidity, temp } = info.main;

        tem.innerText = temp;
        weat.innerText = description;
        const img = description
        const desc = img.split(',')
        // console.log(desc)

        hum.innerText = `${humidity}%`;
        win.innerText = `${speed}km/h`;
        // console.log(description)

        if (id == 800) {
            // wicon.src = "icons/clear.svg";
            var audio = new Audio('audio/Summer.mp3');
            audio.play();
        }
        else if (id >= 200 && id <= 232) {
            // wicon.src = "icons/strom.svg";
            var audio = new Audio('audio/Thunderstrome.mp3');
            audio.play();
        } 
        // else if (id >= 600 && id <= 622) {
        //     // wicon.src = "icons/snow.svg";
        //     var audio = new Audio('audio/Krishnas.mp3');
        //     audio.loop = true;
        //     audio.play();
        // } 
        // else if (id >= 701 && id <= 781) {
        //     // wicon.src = "icons/haze.svg";
        //     var audio = new Audio('audio/Krishnas.mp3');
        //     audio.loop = true;
        //     audio.play();
        // } 
        // else if (id >= 801 && id <= 804) {
        //     // wicon.src = "icons/cloud.svg";
        //     var audio = new Audio('audio/Krishnas.mp3');
        //     audio.loop = true;
        //     audio.play();
        // } 
        else if ((id >= 300 && id <= 321) || (id >= 500 && id <= 531)) {
            // wicon.src = "icons/rain.svg";
            var audio = new Audio('audio/rain.mp3');
            audio.loop = true;
            audio.play();
        }

        // if (BG.style.backgroundImage = "url('https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80')") {
        //     BG.style.backgroundImage = `url('https://source.unsplash.com/random/?${desc}')`;
        //     BG.style.height = "100vh";
        //     BG.style.width = "100vw";

        // }

        main.classList.remove("pending", "error");
        weather.style.display = "block"
        Text.style.display = "none"
    }
}


arrow.addEventListener("click", () => {
    // console.log("working")
    weather.style.display = "none"
    Text.style.display = "block"
    window.location.reload();
})
