const API_KEY = "openweathermap"; 

function Cek() {
    const lat = document.getElementById("lat").value;
    const lon = document.getElementById("lon").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=id`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("city").innerText = data.name || "Tidak ditemukan";
            document.getElementById("temperature").innerText = data.main ? data.main.temp : "N/A";
            document.getElementById("humidity").innerText = data.main ? data.main.humidity : "N/A";
            document.getElementById("weather").innerText = data.weather ? data.weather[0].description : "N/A";
            
            if (data.weather) {
                const iconCode = data.weather[0].icon;
                const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
                document.getElementById("weather-icon").src = iconUrl;
            }
            changeBackground(data.weather[0].main);
        })
        .catch(error => console.error("Terjadi kesalahan:", error));
}
