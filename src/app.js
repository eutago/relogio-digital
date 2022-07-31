// ---------------- HTML Elements --------------- //
const hourNumberText = document.querySelector('[data-hour-number]');
const minuteNumberText = document.querySelector('[data-minute-number]');
const secondNumberText = document.querySelector('[data-second-number]');

// ---------------- Clock function --------------- //
const clock = setInterval(() => {
  // ---------------- Method date --------------- //
  const clockText = new Date();

  // ---------------- Method get hours, minutes and seconds --------------- //
  let hour = clockText.getHours();
  let minute = clockText.getMinutes();
  let second = clockText.getSeconds();

  if (hour < 10) {
    hour = `0${hour}`;
  }

  if (minute < 10) {
    minute = `0${minute}`;
  }

  if (second < 10) {
    second = `0${second}`;
  }

  // ---------------- Incrementing method inside html element --------------- //
  hourNumberText.innerHTML = hour;
  minuteNumberText.innerHTML = minute;
  secondNumberText.innerHTML = second;
}, 100);
