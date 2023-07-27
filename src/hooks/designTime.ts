export const designTime = (time: number) => {
  time = Number.isNaN(time) ? 0 : time;
  const seconds = String((time * 1) % 60).padStart(2, '0');
  let [minutes, hours] = ['', ''];
  let displayTime = `00:${seconds}`;
  if (time >= 60) {
    minutes = String(Math.floor(time / 60) % 60).padStart(2, '0');
    displayTime = `${minutes}:${seconds}`;
  }
  if (time >= 3600) {
    hours = String(Math.floor(time / 3600)).padStart(2, '0');
    displayTime = `${hours}:${minutes}:${seconds}`;
  }
  return displayTime;
};
