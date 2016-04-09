export function padZero(x: number, size: number): string {
  let r = x + "";
  let originalSize = r.length;
  for (let i = 0; i < size - originalSize; i++) {
    r = "0" + r;
  }
  return r;
}

export function getMonthName(m: number): string {
  let monthNames = ["January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"];
  return monthNames[m];
}

export function getDayName(d: number): string {
  // 0 is monday
  let dayNames = ["Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"];
  return dayNames[d];
}
