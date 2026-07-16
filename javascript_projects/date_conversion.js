const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);
function formatDateMMDDYYYY(dateObj) {
  return `Formatted Date (MM/DD/YYYY): ${dateObj.toLocaleDateString("en-US")}`;
}
console.log(formatDateMMDDYYYY(currentDate));

function formatDateLong(dateObj) {
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric"
  }
  return `Formatted Date (Month Day, Year): ${dateObj.toLocaleDateString("en-US", options)}`;
}
