export default function timer(deadLine) {
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');

  let intervalId;

  const getTimeRemaining = () => {
    // let deadLine = '25 october 2026';

    const dateStop = new Date(deadLine).getTime();
    const dateNow = new Date().getTime();
    const dateRemaining = (dateStop - dateNow) / 1000;

    // let days = Math.floor(dateRemaining / 3600 / 24)
    const seconds = Math.floor(dateRemaining % 60);
    const minutes = Math.floor((dateRemaining / 60) % 60);
    const hours = Math.floor(dateRemaining / 3600 /* % 24 */);

    // eslint-disable-next-line object-curly-newline
    return { dateRemaining, hours, minutes, seconds };
  };

  const addZero = (num) => {
    if (num <= 0) {
      return '00';
    }
    if (num < 10) {
      return `0${num}`;
    }
    return num;
  };

  const updateClock = () => {
    const getTime = getTimeRemaining();

    timerHours.textContent = addZero(getTime.hours);
    timerMinutes.textContent = addZero(getTime.minutes);
    timerSeconds.textContent = addZero(getTime.seconds);

    if (getTime.dateRemaining <= 0) {
      clearInterval(intervalId);
    }
  };

  intervalId = setInterval(() => {
    updateClock();
  }, 1000);

  updateClock();

  // countTimer('25 october 2026');
  // setInterval(countTimer, 1000, '25 october 2026');
}
