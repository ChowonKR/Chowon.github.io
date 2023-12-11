const clock = document.querySelector("#clock");

function currentTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').innerText = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

//setinteval 함수 정의  
function init() {
    currentTime();
    setInterval(currentTime, 1000);
  }
  
  init();