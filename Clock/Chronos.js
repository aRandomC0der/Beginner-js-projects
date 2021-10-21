setInterval(time, 1000)
function time() {
  let timeNow = new Date().toLocaleTimeString('en-us', { hour: 'numeric', minute: 'numeric', hour12: true });
document.getElementById('current-time').innerHTML = timeNow;
}

time(); 
