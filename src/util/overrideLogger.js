const chalk = require('chalk')

const origLog = console.log
const origErr = console.error
const origWarn = console.warn
const origInfo = console.info
const origDebug = console.debug

console.log = (message, optionalParams) => origLog(`${chalk.blue('LOG')}: ${message}`, optionalParams || '')
console.error = (message, optionalParams) => origErr(`${chalk.red('ERROR')}: ${message}`, optionalParams || '')
console.warn = (message, optionalParams) => origWarn(`${chalk.yellow('WARN')}: ${message}`, optionalParams || '')
console.info = (message, optionalParams) => origInfo(`${chalk.cyan('INFO')}: ${message}`, optionalParams || '')
console.debug = (message, optionalParams) => origDebug(`${chalk.yellow('DEBUG')}: ${message}`, optionalParams || '')
