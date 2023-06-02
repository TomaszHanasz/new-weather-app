export const getTodaysDay = () => {
  let dayOfTheWeek = "";
  switch (new Date().getDay()) {
    case 0:
      dayOfTheWeek = "Sunday";
      break;
    case 1:
      dayOfTheWeek = "Monday";
      break;
    case 2:
      dayOfTheWeek = "Tuesday";
      break;
    case 3:
      dayOfTheWeek = "Wednesday";
      break;
    case 4:
      dayOfTheWeek = "Thursday";
      break;
    case 5:
      dayOfTheWeek = "Friday";
      break;
    case 6:
      dayOfTheWeek = "Saturday";
      break;
    default:
      dayOfTheWeek = "";
      break;
  }
  return dayOfTheWeek;
};

export const getMonth = () => {
  let month = "";
  switch (new Date().getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
    default:
      month = "";
  }
  return month;
};
