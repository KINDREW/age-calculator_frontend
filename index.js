const input_day = document.querySelector("#input-day");
const input_month = document.querySelector("#input-month");
const input_year = document.querySelector("#input-year");
isValid = false;
const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
const btn = document.querySelector("button");
const day_error = document.querySelector(".day-error");
const month_error = document.querySelector(".month-error");
const year_error = document.querySelector(".year-error");

input_day.addEventListener("input", (e) => {
  if (+input_day.value > 31) {
    day_error.textContent = "Enter a valid day";
    isValid = false;
  } else if (+input_day.value === 0) {
    day_error.textContent = "This a required field";
    isValid = false;
  } else {
    day_error.textContent = "";
    isValid = true;
  }
});

input_month.addEventListener("input", (e) => {
  if (+input_month.value > 12) {
    month_error.textContent = "Enter a valid month";
    isValid = false;
  } else if (+input_month.value === 0) {
    month_error.textContent = "This a required field";
    isValid = false;
  } else {
    month_error.textContent = "";
    isValid = true;
  }
});

input_year.addEventListener("input", (e) => {
  if (+input_year.value > 2023) {
    year_error.textContent = "Enter a valid year";
    isValid = false;
  } else if (+input_year.value === 0) {
    year_error.textContent = "This a required field";
    isValid = false;
  } else {
    year_error.textContent = "";
    isValid = true;
  }
});

btn.addEventListener("click", () => {
  if (isValid) {
    let birthday = ` ${input_month.value}/${input_day.value}/${input_year.value}`;
    console.log(birthday);
    let birthdayobj = new Date(birthday);
    console.log(birthdayobj);
    let ageDiff = Date.now() - birthdayobj;
    let ageDate = new Date(ageDiff);
    ageYear = ageDate.getUTCFullYear() - 1970;
    ageMonth = ageDate.getUTCMonth();
    ageday = ageDate.getUTCDay() - 1;

    output_year.textContent = ageYear;
    output_month.textContent = ageMonth;
    output_day.textContent = ageday;
  } else {
    alert("enter a valid date");
  }
});
