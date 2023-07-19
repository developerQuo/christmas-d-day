const timer = document.getElementById("timer");

const calcRemainingNums = { ms: 1000, sec: 60, min: 60, hr: 24, date: 365 };

const dDayOfchristmas = () => {
  const today = new Date();

  const [christmasMonth, christmasDate] = [12 - 1, 25];
  const [todayMonth, todayDate] = [today.getMonth(), today.getDate()];

  // 크리스마스 당일 넘어가면 내년 크리스마스로 변경
  const christmasYear =
    christmasMonth === todayMonth && todayDate > christmasDate
      ? today.getFullYear() + 1
      : today.getFullYear();
  const christmas = new Date(christmasYear, christmasMonth, christmasDate);

  let remainingMs = Date.parse(christmas) - Date.parse(today);

  const remaining = {};

  for (const [key, value] of Object.entries(calcRemainingNums)) {
    const result = Math.floor(remainingMs % value);
    remaining[key] = key !== "date" ? String(result).padStart(2, "0") : result;

    remainingMs = remainingMs / value;
  }

  timer.innerText = `${remaining.date}d ${remaining.hr}h ${remaining.min}m ${remaining.sec}s`;
};

dDayOfchristmas();

setInterval(dDayOfchristmas, 1000);
