// Commit 3: Funciones para seleccionar ciudades
function actualizarClima(ciudad = 'Buenos Aires') {
    fetch(`datos.php?ciudad=${encodeURIComponent(ciudad)}`)
        .then(response => response.json())
        .then(data => {
            mostrarDatosPrincipales(data);
            mostrarPronostico(data.forecast);
            mostrarAlertas(data.alerts);
        })
        .catch(() => {
            alert("Error al obtener datos del clima.");
        });
}

function mostrarDatosPrincipales(data) {
    document.getElementById("locationName").textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById("weatherDescription").textContent = data.weather[0].description;
    document.getElementById("currentTemp").textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById("feelsLike").textContent = `${Math.round(data.main.feels_like)}°C`;
    document.getElementById("humidity").textContent = `${data.main.humidity}%`;
    document.getElementById("windSpeed").textContent = `${data.wind.speed} km/h`;
    document.getElementById("pressure").textContent = `${data.main.pressure} hPa`;
    document.getElementById("lastUpdate").textContent = `Actualizado: ${new Date().toLocaleTimeString()}`;
}

function mostrarPronostico(forecast) {
    const contenedor = document.getElementById("forecastContainer");
    contenedor.innerHTML = "";
    for (const dia of forecast) {
        const card = document.createElement("div");
        card.className = "forecast-card";
        card.innerHTML = `
            <div>${dia.day}</div>
            <div>${getIcono(dia.icon)}</div>
            <div>${dia.max}° / ${dia.min}°</div>
        `;
        contenedor.appendChild(card);
    }
}

function mostrarAlertas(alertas) {
    const contenedor = document.getElementById("alertsContainer");
    contenedor.innerHTML = "";
    if (alertas.length === 0) {
        contenedor.innerHTML = "<p>No hay alertas en este momento.</p>";
        return;
    }

    for (const alerta of alertas) {
        const alertaHTML = `
            <div class="alert-card">
                <strong>${alerta.title}</strong>
                <p>${alerta.message}</p>
                <small>${alerta.source} • ${alerta.time}</small>
            </div>`;
        contenedor.innerHTML += alertaHTML;
    }
}

function getIcono(icono) {
    const mapa = {
        sunny: "☀️",
        cloudy: "☁️",
        rainy: "🌧️",
        stormy: "⛈️"
    };
    return mapa[icono] || "🌤️";
}

document.getElementById("refreshButton").addEventListener("click", () => {
    actualizarClima();
});

actualizarClima();

document.getElementById("searchButton").addEventListener("click", () => {
    const ciudad = document.getElementById("cityInput").value.trim();
    if (ciudad) {
        actualizarClima(ciudad);
    }
});
