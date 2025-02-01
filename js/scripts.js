console.log('javascript connected!');

const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 5000,
    pause: false
})

const carouselButton = document.getElementById('carouselButton');
const faIcon = document.getElementById('faButton');

carouselButton.addEventListener('click', function(){
    if (faIcon.classList.contains('fa-pause')) {
        faIcon.classList.remove('fa-pause');
        faIcon.classList.add(fa-play);
        carousel.pause()
    } else {
        faIcon.classList.remove('fa-play');
        faIcon.classList.add('fa-pause');
        carousel.cycle();
    }
})

// //when the pause button is clicked, pause the carousel
// const carouselPause = document.getElementById('carouselPause');
// carouselPause.addEventListener('click', function() {
//     console.log('pausing the carousel');
//     carousel.pause();
// })

// // whne the play button is clicked, begin cycling through images
// const carouselPlay = document.getElementById('carouselPlay');
// carouselPlay.addEventListener('click', function(){
//     console.log('cycle the carousel');
//     carousel.cycle();
// })

async function fetchWeather() {
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const city = 'Ridgeway';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    const res = await fetch(url);
    const result = await res.json();

    console.log(result);
    displayWeather(result);
    
}

fetchWeather();

function displayWeather(result) {
    const icon = document.createElement('img');
    const iconData = result.weather[0].icon;
    const temp = result.main.temp;
    const desc = result.weather[0].description;

    icon.src = `https://openweathermap.org/img/w/${iconData}.png`;
    document.querySelector('#weather-icon').appendChild(icon);

    document.querySelector('#weather-temp').textContent = temp;
    document.querySelector('#weather-description').textContent = desc;

}
