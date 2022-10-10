const $ = document.querySelector.bind(document);


const rotateHand = date => {
  const hourDeg = ((date.getHours() / 12) * 360) + 90;
  const minuteDeg = ((date.getMinutes() / 60) * 360) + 90;
  const secondDeg = ((date.getSeconds() / 60) * 360)  + 90;
  const hour = $(".hour-hand");
  const minute = $(".minute-hand");
  const second = $(".second-hand");
  hour.style.transform = `rotate(${hourDeg}deg)`;
  minute.style.transform = `rotate(${minuteDeg}deg)`;
  second.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(function() {
  const date = new Date();
  rotateHand(date);
}, 1000);
