const sosBtn = document.getElementById("sosBtn");
const statusText = document.getElementById("status");

sosBtn.addEventListener("click", () => {
    speak("SOS activated. Sending your location");

    if (!navigator.geolocation) {
        statusText.innerText = "Geolocation not supported";
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            statusText.innerHTML = `
                📍 Location Sent <br>
                <a href="https://www.google.com/maps?q=${lat},${lon}" target="_blank">
                    Open in Google Maps
                </a>
            `;
        },
        () => {
            statusText.innerText = "Location permission denied";
        }
    );
});

function speak(text) {
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
}
