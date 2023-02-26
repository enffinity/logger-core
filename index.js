import chalk from 'chalk';
import date from 'date-fns';

const infoColor = chalk.rgb(4, 211, 255);
const debugColor = chalk.rgb(0, 38, 230);
const fatalColor = chalk.rgb(153, 51, 255)

const createDate = () => {
    return chalk.gray(date.format(new Date(), 'p'));
}

/**
 * 
 * @param {string} msg
 */
export const info = (msg) => {
    return console.log(`${createDate()} ${infoColor.bold('INFO')} ${msg}`);
}

/**
 * 
 * @param {string} msg
 */
export const debug = (msg) => {
    return console.log(`${createDate()} ${debugColor.bold('DEBU')} ${msg}`);
}

/**
 * 
 * @param {string} msg
 */
export const warn = (msg) => {
    return console.log(`${createDate()} ${chalk.yellow.bold('WARN')} ${msg}`);
}

/**
 * 
 * @param {string} msg
 */
export const fatal = (msg) => {
    return console.log(`${createDate()} ${fatalColor.bold('FATL')} ${msg}`);
}

/**
 * 
 * @param {string} msg
 */
export const error = (msg) => {
    return console.log(`${createDate()} ${chalk.red.bold('ERRO')} ${msg}`)
}

export default {
    info,
    debug,
    warn,
    fatal,
    error
}