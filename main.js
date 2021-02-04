const button = document.getElementById('btn');
const search = document.getElementById('search');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const desc = document.getElementById('desc');

button.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q= ' + search.value + ' &appid=23d8200fc004499e54b4e1b5648e6c89')
        .then(res => res.json())
        .then(data => {
            const cityValue = data['name'];
            const tempValue = data['main']['temp'];
            const finalTempValue = Math.floor(tempValue - 273);
            const descValue = data['weather'][0]['description'];

            city.innerText = cityValue;
            temp.innerText = finalTempValue;
            desc.innerText = descValue;

        })
        .catch(err => alert("wrong city"))
})

