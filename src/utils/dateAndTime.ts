export const oneDayInMilisecs = 24 * 60 * 60 * 1000;

export const convertMillisecsToDateTime = (millis: number) => {
  let seconds = Number((millis / 1000).toFixed(0));
  let minutes = Math.floor(seconds / 60);
  let stringMinutes = '';
  let hours = 0;
  let stringHours = '';
  if (minutes > 59) {
    hours = Math.floor(minutes / 60);
    stringHours = hours >= 10 ? hours.toString() : '0' + hours.toString();
    minutes = minutes - hours * 60;
  }
  stringMinutes = minutes >= 10 ? minutes.toString() : '0' + minutes.toString();

  seconds = Math.floor(seconds % 60);
  const stringSeconds =
    seconds >= 10 ? seconds.toString() : '0' + seconds.toString();
  if (hours != 0) {
    return stringHours + ':' + stringMinutes + ':' + stringSeconds;
  }
  return stringMinutes + ':' + stringSeconds;
};
