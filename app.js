const chalk = require('chalk');
const moment = require('moment');

const startOfDay = moment().startOf('day');

console.log(`It is ${chalk.blue.bold(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))}`);
console.log(`It is the ${chalk.magenta.bold(moment().format("DDDo"))} day of the year`);
console.log(`It is ${chalk.cyan.bold(Math.floor(moment().diff(startOfDay)/1000))} seconds into the day`);
moment().isDST() ? console.log(`It ${chalk.green.bold("is")} during Daylight Savings Time.`) : console.log(`It ${chalk.green.bold("is not")} during DST.`);
moment().isLeapYear() ? console.log(`It ${chalk.red.bold("is")} a leap year!`) : console.log(`It ${chalk.red.bold("is not")} a leap year.`);
