const clock = document.getElementById("clock");
const dateDisplay = document.getElementById("date");
const toggleBtn = document.getElementById("toggle");

let is24Hour = false;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');
  let ampm = '';

  if (!is24Hour) {
    ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
  }

  const hourStr = hours.toString().padStart(2, '0');
  clock.innerHTML = `${hourStr}<span class="colon">:</span>${minutes}<span class="colon">:</span>${seconds} ${!is24Hour ? `<span id="ampm">${ampm}</span>` : ''}`;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateDisplay.textContent = now.toLocaleDateString(undefined, options);
}

toggleBtn.addEventListener("click", () => {
  is24Hour = !is24Hour;
  toggleBtn.textContent = is24Hour ? "Switch to 12-Hour Format" : "Switch to 24-Hour Format";
});

setInterval(updateClock, 1000);
updateClock(); 
