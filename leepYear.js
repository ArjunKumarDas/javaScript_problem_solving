function leapYear(year){
  return ((year % 4 === 0) && (year % 100 != 0)) || (year % 400 == 0);
}
console.log(leapYear(2020));
console.log(leapYear(2021));

function checkLeapYear(year) {
          //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
                console.log(year + ' is a leap year');
            } else {
                console.log(year + ' is not a leap year');
            }
        }

        // take input
        // const year = prompt('Enter a year:');

        checkLeapYear(2020);
        checkLeapYear(2021);